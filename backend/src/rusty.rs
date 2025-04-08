use std::path::Path;

use rust_embed::RustEmbed;
use rustyscript::{Error, Module, Runtime, RuntimeOptions, Undefined, json_args};
use vfs::{EmbeddedFS, VfsPath};

#[derive(RustEmbed, Debug)]
#[folder = "../prebuild/node-server"]
pub struct ServerFiles;

pub fn run() -> Result<(), Box<Error>> {
    let mut runtime = match Runtime::new(RuntimeOptions {
        ..Default::default()
    }) {
        Ok(r) => r,
        Err(e) => {
            eprintln!("Error creating runtime: {}", e);
            return Err(Box::new(Error::Runtime(e.to_string())));
        }
    };

    let fs: EmbeddedFS<ServerFiles> = EmbeddedFS::new();
    let root: VfsPath = fs.into();

    let module_path = "server/index.mjs";
    let file = root
        .join(module_path)
        .map_err(|e| Box::new(Error::Runtime(e.to_string())))?;
    let mut content = String::new();

    file.open_file()
        .map_err(|e| Box::new(Error::Runtime(e.to_string())))?
        .read_to_string(&mut content)
        .map_err(|e| Box::new(Error::Runtime(e.to_string())))?;

    runtime.set_current_dir(Path::new(root.as_str())).unwrap();

    let module = Module::new(module_path, content);
    let module_handle = runtime.load_module(&module)?;
    runtime.call_entrypoint::<Undefined>(&module_handle, json_args!())?;

    Ok(())
}

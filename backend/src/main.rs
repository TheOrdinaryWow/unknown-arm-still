mod rusty;

fn main() {
    match rusty::run() {
        Ok(_) => println!("Program ran successfully"),
        Err(e) => {
            eprintln!("An error occurred: {}", e);
            std::process::exit(1);
        }
    }
}

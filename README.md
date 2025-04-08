## Minimal Reproduction for [rscarson/rustyscript#360](https://github.com/rscarson/rustyscript/issues/360)

## TLDR.
- I've prebuilt the dist under `prebuild`. Switch between presets by adjusting `L8: #[folder = "..."]` in `backend/src/rusty.rs` to tryout.

## Host Info
- OS: macOS 15.3.2
- CPU: (12) arm64 Apple M2 Max
- Node: 22.14.0
- bun: 1.2.8
- rustc/cargo: 1.88.0-nightly (2fa8b11f0 2025-04-06)

### Prerequisites
- Install Rust and Cargo via [rustup](https://rustup.rs/)
- Install Bun via [Bun](https://bun.sh/)
- Install Node.js via [Node.js](https://nodejs.org/en/download/)

### Instructions
- Navigate to `frontend` directory,
- use `bun run build` to build dist
- Navigate to `backend` directory,
- use `cargo run` to run server

### Info
- mod `server.preset` in `frontend/app.config.ts` to switch between presets.
- might need to adjust `L8: #[folder = "..."]` in `backend/src/rusty.rs`.

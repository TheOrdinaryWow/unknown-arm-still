## Minimal Reproduction for [rscarson/rustyscript#360](https://github.com/rscarson/rustyscript/issues/360)

## TLDR.
- I've prebuild the frontend dist under `prebuild`. Switch between presets by adjusting [`L8`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/backend/src/rusty.rs#L8) and [`L25`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/backend/src/rusty.rs#L25) in [`backend/src/rusty.rs`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/backend/src/rusty.rs) to tryout.

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
- Navigate to `frontend` directory
- mod [`server.preset`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/frontend/app.config.ts#L19) in [`frontend/app.config.ts`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/frontend/app.config.ts) to switch between presets
- use `bun run build` to build dist
- Navigate to `backend` directory
- might need to adjust [`L8`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/backend/src/rusty.rs#L8) and [`L25`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/backend/src/rusty.rs#L25) in [`backend/src/rusty.rs`](https://github.com/TheOrdinaryWow/unknown-arm-still/blob/main/backend/src/rusty.rs)
- use `cargo run` to run server

import legacyPlugin from 'vite-plugin-legacy'


const config = {
    // https: true,
    base: "/",
    plugins: [legacyPlugin()]
}

export default config
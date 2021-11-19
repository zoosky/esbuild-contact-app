import esbuildServe from 'esbuild-serve';
import sassEs from 'essass'

esbuildServe(
    {
        entryPoints: ['src/index.ts', 'src/about.ts'],
        bundle: true,
        outdir: 'dist',
        logLevel: 'info',
        minify: false,
        splitting: true,
        format: 'esm',
        sourcemap: true,
        plugins: [sassEs],
        loader: {
            '.png': 'file',
            '.html': 'text'
        },
    },
    { root: "dist"
    }
  ).catch(() => process.exit(1))
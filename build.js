import esbuildServe from 'esbuild-serve';
import saasEs from 'essass'

esbuildServe(
    {
        entryPoints: ['src/index.ts', 'src/about.ts'],
        bundle: true,
        outdir: 'dist',
        logLevel: 'info',
        minify: true,
        splitting: true,
        format: 'esm',
        sourcemap: true,
        plugins: [saasEs],
        loader: {
            '.png': 'file',
            '.html': 'text'
        },
    },
    { root: "dist"
    }
  ).catch(() => process.exit(1))
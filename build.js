import esbuildServe from 'esbuild-serve';
import saasEs from 'essass'

esbuildServe(
    {
        entryPoints: ['src/index.ts'],
        bundle: true,
        outfile: 'dist/index.js',
        logLevel: 'info',
        minify: true,
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
import esbuildServe from 'esbuild-serve';

esbuildServe(
    {
        entryPoints: ['src/index.ts'],
        bundle: true,
        outfile: 'dist/index.js',
        logLevel: 'info',
        loader: {
            '.png': 'file',
            '.html': 'text'
        },
    },
    { root: "dist"
    }
  ).catch(() => process.exit(1))
require('esbuild').build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.js',
    logLevel: 'info',
    loader: {
        '.png': 'file',
        '.html': 'text'
    }
  }).catch(() => process.exit(1))
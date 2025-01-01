import esbuild from 'esbuild';

const options = {
  entryPoints: ['./src/main.jsx'], // Entry point for your React app
  bundle: true,
  outfile: './static/frontend/main.js', // Compiled output
  minify: true,
  sourcemap: true,
  loader: { '.css': 'file', '.jpeg': 'file', '.png': 'file' }, // Support CSS and images
  define: { 'process.env.NODE_ENV': '"production"' },
  jsx: 'automatic', // Native JSX support with React 17+
};

// Check if watch mode is enabled
const isWatchMode = process.argv.includes('--watch');

if (isWatchMode) {
  esbuild
    .build({
      ...options,
      watch: {
        onRebuild(error) {
          if (error) console.error('Watch build failed:', error);
          else console.log('Rebuilt successfully!');
        },
      },
    })
    .then(() => console.log('Watching for changes...'))
    .catch(() => process.exit(1));
} else {
  esbuild
    .build(options)
    .then(() => console.log('Build complete!'))
    .catch(() => process.exit(1));
}
# ssbc site generator

A tool to generate the GH pages for ssbc repos.
Requires the latest node because it uses es6 features, such as template-strings and generators.

## Usage

- Clone this repo, eg to `~/ssbc-sitegen`.
- Go to the repo you want to update, and open the `gh-pages` branch.
- Run `~/ssbc-sitegen/index.js <repo>`
- Commit any updated assets

Example:

```
cd ~/patchwork
~/ssbc-sitegen/index.js patchwork
```

## File structure

Each repo has a folder under `./repos`, plus an entry in the `REPOS` constant in `./index.js`.
The JS files in the repo folder are templates.

The build-tool will iterate all JS files under `./repo/<repo>/*` and write the output to cwd.
The output-file is the JS file, minus the `.js` extension.
Therefore, `index.html.js` will output `index.html`.

The build-tool also iterates and outputs all JS files under `./common`.

**Note, most templates will pull from markdown files in the cwd, such as `README.md`.**


## Template files

The JS files are template files.
They should export a generator which yields the output.
They are passed the object that's exported by `./gen.js`, which gives them access to build utilities and partials.
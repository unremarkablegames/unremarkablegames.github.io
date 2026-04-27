
#### Run a local site
```sh
./bin/bundle install
./bin/jekyll clean
./bin/jekyll serve
```

This uses a GitHub Pages-compatible Homebrew Ruby when the shell has not put one
first on `PATH`. The plain `ruby` Homebrew formula may be too new for GitHub
Pages; use a versioned Ruby 3.x formula instead:

```sh
brew install ruby@3.3
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
```

This site is built by GitHub Pages, so `Gemfile.lock` stays ignored. GitHub
Pages publishes with its own locked dependency set; the `github-pages` gem keeps
local builds close to that environment. Local gems are installed into ignored
`vendor/bundle`.

#### Analytics
https://dash.cloudflare.com/93ffdbd35ef7c1143c581803291ce697/web-analytics/sites

#### Other useful stuff
* https://htmlcolorcodes.com/
* 

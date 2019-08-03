set :application, "resume"

set :scp, :git
set :repository, "git@github.com:giegerdj/resume.git"

require "capistrano/ext/multistage"
set :stages, ["staging","production"]

set :default_stage, "staging"

set :ssh_options, {
    :user =>  "forge",
    :forward_agent => true
}

set :deploy_via, :remote_cache
set :use_sudo, false
set :copy_exclude, [".git/", ".gitignore", "/Capfile", "/config/"]
set :keep_releases, 10

after "deploy:update", "deploy:cleanup"



role :web, "forge-secondary.davegieger.com"
role :app, "forge-secondary.davegieger.com"
role :db, "forge-secondary.davegieger.com", :primary => true

set :deploy_to, "/home/forge/resume.davegieger.com/"

# ssh_options[:keys] = [File.join(ENV["HOME"], ".ssh", "prod_deploy_dsa")]

set :branch, "master"



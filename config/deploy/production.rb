
role :web, "p.davegieger.com"
role :app, "p.davegieger.com"
role :db, "p.davegieger.com", :primary => true

set :deploy_to, "/var/www/html/master/resume/"

ssh_options[:keys] = [File.join(ENV["HOME"], ".ssh", "prod_deploy_dsa")]

set :branch, "master"



// available plugins for numbers module
const plugins = require('./numbers.js');
const numbers_plugin = require('./numbers.js');

/*
@ example
plugin_req = [{"name":"not_more_than_10_digits", "params":[10]}]


*/

const searchPLugin = (name,numbers_plugin) =>
    {

        let one_plugin = numbers_plugin.find(p => {
            if(p['plugin_name']==name){
                return p;
            }
        })

        return one_plugin['plugin_functionality']
        
    }

module.exports = function(plugin_req) {
    let plugins_promises = [];
    plugin_req.map(p=>{
        let plugin_fun = searchPLugin(p['name'],numbers_plugin);
        if(plugin_fun){
            plugins_promises.push(plugin_fun(p['params']))
        }
    })
    return plugins_promises;

}
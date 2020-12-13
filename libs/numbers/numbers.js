const plugins = [


    {
        plugin_name : "not_more_than_10_digits",
        plugin_functionality: require('../../src/not_more_than_10_digits')
    },

    {
        plugin_name : "range_with_min_max",
        plugin_functionality : require('../../src/range_with_min_max'),
    }


];

module.exports = plugins
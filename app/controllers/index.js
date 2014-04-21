exports.home = function(req, res)
{
    // Render the home page
    res.render('index', { 
        title: "Graeme Boy - Home",
    }); // render
};

exports.hello = function(req, res)
{
    // Render the home page
    res.render('index', { 
        title: "Graeme Boy - Home",
    }); // render
    
}
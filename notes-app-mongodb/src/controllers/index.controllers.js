
const indexCtrl = {};


indexCtrl.renderIndex = (req, res) => {
    console.dir(res);
    res.render('index')
};


indexCtrl.renderAbout = (req, res) => {
    res.render('about')
};



module.exports = indexCtrl;

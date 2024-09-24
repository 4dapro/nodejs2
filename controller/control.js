const main = {
    main: (req, res) => {
        res.render('index')
    },
    addUser: (req, res) => {
        res.render('about')
    },
    getUsers: (req, res) => {
        res.render('services')
    },
    updateUser: (req, res) => {
        res.render('gallery')
    },
    deleteUser: (req, res) => {
        res.render('contact')
    },

}
module.exports = main; 
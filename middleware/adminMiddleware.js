function verifyAdmin(req, res, next) {
    if (req.user.role !== 'admin') return res.status(403).send('Access Forbidden: Admins only');
    next();
}

module.exports = verifyAdmin;

/**
 * 104p-2
 */

//testModule       따라칠 필요는 없음.
exports.test = async(req, res) => {
    res.send(obj)
}
//router/index.js
router.get('/test', testModule.test)
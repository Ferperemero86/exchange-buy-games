const router = require("express").Router();
const users = require("../controllers/users");
const gamesInList = require("../controllers/games-inlist");
const gamesLists = require("../controllers/games-lists");
const gamesTransactions = require("../controllers/games-transactions");
const mainSearch = require("../controllers/main-search");
const games = require("../controllers/games");

router.use(users);
router.use(gamesInList);
router.use(gamesLists);
router.use(gamesTransactions);
router.use(mainSearch);
router.use(games);

module.exports = router;

const ssBotList = [
    { subreddit: 'askhistorians', username: '/u/AskHistorians_SS', dateAdded: '2015-06-06' },
    { subreddit: 'askscience', username: '/u/AskScience_SS', dateAdded: '2015-06-06' },
    { subreddit: 'pcmasterrace', username: '/u/pcmasterrace_SS', dateAdded: '2015-06-06' },
    { subreddit: 'gonewild', username: '/u/gonewild_SS', dateAdded: '2015-06-06' },
    { subreddit: 'conspiracy', username: '/u/conspiracy_SS', dateAdded: '2015-06-06' },
    { subreddit: 'circlejerk', username: '/u/circlejerk_SS', dateAdded: '2015-06-06' },
    { subreddit: 'funny', username: '/u/funny_SS', dateAdded: '2015-06-07' },
    { subreddit: 'pics', username: '/u/pics_SS', dateAdded: '2015-06-07' },
    { subreddit: 'askreddit', username: '/u/AskReddit_SS', dateAdded: '2015-06-08' },
    { subreddit: 'movies', username: '/u/movies_SS', dateAdded: '2015-06-08' },
    { subreddit: 'music', username: '/u/Music_SS', dateAdded: '2015-06-08' },
    { subreddit: 'books', username: '/u/books_SS', dateAdded: '2015-06-08' },
    { subreddit: 'food', username: '/u/food_SS', dateAdded: '2015-06-08' },
    { subreddit: 'trees', username: '/u/trees_SS', dateAdded: '2015-06-08' },
    { subreddit: 'gaming', username: '/u/gaming_SS', dateAdded: '2015-06-08' },
    { subreddit: 'aww', username: '/u/aww_SS', dateAdded: '2015-06-08' },
    { subreddit: 'todayilearned', username: '/u/todayilearned_SS', dateAdded: '2015-06-08' },
    { subreddit: 'tifu', username: '/u/tifu_SS', dateAdded: '2015-06-08' },
    { subreddit: 'adviceanimals', username: '/u/AdviceAnimals_SS', dateAdded: '2015-06-08' },
    { subreddit: '4chan', username: '/u/4chan_SS', dateAdded: '2015-06-08' },
    { subreddit: 'television', username: '/u/television_SS', dateAdded: '2015-06-08' },
    { subreddit: 'explainlikeimfive', username: '/u/explainlikeimfive_SS', dateAdded: '2015-06-08' },
    { subreddit: 'atheism', username: '/u/atheism_SS', dateAdded: '2015-06-08' },
    { subreddit: 'news', username: '/u/news_SS', dateAdded: '2015-06-08' },
    { subreddit: 'worldnews', username: '/u/worldnews_SS', dateAdded: '2015-06-08' },
    { subreddit: 'politics', username: '/u/politics_SS', dateAdded: '2015-06-08' },
    { subreddit: 'writingprompts', username: '/u/writingprompts_SS', dateAdded: '2015-06-08' },
    { subreddit: 'fitness', username: '/u/fitness_SS', dateAdded: '2015-06-08' },
    { subreddit: 'iama', username: '/u/IAmA_SS', dateAdded: '2015-06-08' },
    { subreddit: 'programming', username: '/u/programming_SS', dateAdded: '2015-06-08' },
    { subreddit: 'showerthoughts', username: '/u/Showerthoughts_SS', dateAdded: '2015-06-09' },
    { subreddit: 'kotakuinaction', username: '/u/KotakuInAction_SS', dateAdded: '2015-06-09' },
    { subreddit: 'bitcoin', username: '/u/Bitcoin_SS', dateAdded: '2015-06-09' },
    { subreddit: 'pokemon', username: '/u/pokemon_SS', dateAdded: '2015-06-09' },
    { subreddit: 'malefashionadvice', username: '/u/malefashionadvice_SS', dateAdded: '2015-06-09' },
    { subreddit: 'theredpill', username: '/u/TheRedPill_SS', dateAdded: '2015-06-09' },
    { subreddit: 'twoxchromosomes', username: '/u/TwoXChromosomes_SS', dateAdded: '2015-06-09' },
    { subreddit: 'subredditdrama', username: '/u/SubredditDrama_SS', dateAdded: '2015-06-09' },
    { subreddit: 'asoiaf', username: '/u/asoiaf_SS', dateAdded: '2015-06-09' },
    { subreddit: 'nfl', username: '/u/nfl_SS', dateAdded: '2015-06-09' },
    { subreddit: 'legaladvice', username: '/u/LegalAdvice_SS', dateAdded: '2015-06-09' },
    { subreddit: 'soccer', username: '/u/soccer_SS', dateAdded: '2015-06-09' },
    { subreddit: 'anime', username: '/u/anime_SS', dateAdded: '2015-06-09' },
    { subreddit: 'videos', username: '/u/videos_SS', dateAdded: '2015-06-09' },
    { subreddit: 'leagueoflegends', username: '/u/leagueoflegends_SS', dateAdded: '2015-06-10' },
    { subreddit: 'hiphopheads', username: '/u/hiphopheads_SS', dateAdded: '2015-06-11' },
    { subreddit: 'changemyview', username: '/u/changemyview_SS', dateAdded: '2015-06-11' },
    { subreddit: 'badhistory', username: '/u/badhistory_SS', dateAdded: '2015-06-11' },
    { subreddit: 'sex', username: '/u/sex_SS', dateAdded: '2015-06-12' },
    { subreddit: 'games', username: '/u/Games_SS', dateAdded: '2015-06-12' },
    { subreddit: 'nosleep', username: '/u/nosleep_SS', dateAdded: '2015-06-12' },
    { subreddit: 'squaredcircle', username: '/u/SquaredCircle_SS', dateAdded: '2015-06-12' },
    { subreddit: 'libertarian', username: '/u/Libertarian_SS', dateAdded: '2015-06-12' },
    { subreddit: 'trollxchromosomes', username: '/u/TrollXChromosomes_SS', dateAdded: '2015-06-12' },
    { subreddit: 'cringe', username: '/u/cringe_SS', dateAdded: '2015-06-12' },
    { subreddit: 'crusaderkings', username: '/u/CrusaderKings_SS', dateAdded: '2015-06-12' },
    { subreddit: 'polandball', username: '/u/polandball_SS', dateAdded: '2015-06-12' },
    { subreddit: 'wow', username: '/u/wow_SS', dateAdded: '2015-06-12' },
    { subreddit: 'tumblrinaction', username: '/u/tumblrinaction_SS', dateAdded: '2015-06-12' },
    { subreddit: 'europe', username: '/u/europe_SS', dateAdded: '2015-06-12' },
    { subreddit: 'comicbooks', username: '/u/comicbooks_SS', dateAdded: '2015-06-12' },
    { subreddit: 'mylittlepony', username: '/u/mylittlepony_SS', dateAdded: '2015-06-12' },
    { subreddit: 'cars', username: '/u/cars_SS', dateAdded: '2015-06-12' },
    { subreddit: 'parenting', username: '/u/parenting_SS', dateAdded: '2015-06-12' },
    { subreddit: 'childfree', username: '/u/childfree_SS', dateAdded: '2015-06-12' },
    { subreddit: 'mildlyinteresting', username: '/u/mildlyinteresting_SS', dateAdded: '2015-06-12' },
    { subreddit: '2007scape', username: '/u/2007scape_SS', dateAdded: '2015-06-12' },
    { subreddit: 'drugs', username: '/u/drugs_SS', dateAdded: '2015-06-12' },
    { subreddit: 'dota2', username: '/u/dota2_SS', dateAdded: '2015-06-12' },
    { subreddit: 'christianity', username: '/u/Christianity_SS', dateAdded: '2015-06-12' },
    { subreddit: 'mensrights', username: '/u/MensRights_SS', dateAdded: '2015-06-12' },
    { subreddit: 'dwarffortress', username: '/u/dwarffortress_SS', dateAdded: '2015-06-12' },
    { subreddit: 'minecraft', username: '/u/Minecraft_SS', dateAdded: '2015-06-12' },
    { subreddit: 'science', username: '/u/science_SS', dateAdded: '2015-06-12' },
    { subreddit: 'technology', username: '/u/technology_SS', dateAdded: '2015-06-12' },
    { subreddit: 'futurology', username: '/u/Futurology_SS', dateAdded: '2015-06-12' },
    { subreddit: 'personalfinance', username: '/u/personalfinance_SS', dateAdded: '2015-06-12' },
    { subreddit: 'talesfromtechsupport', username: '/u/TalesFromTechSupp_SS', dateAdded: '2015-06-17' },
    { subreddit: 'talesfromretail', username: '/u/TalesFromRetail_SS', dateAdded: '2015-06-17' },
    { subreddit: 'lifeprotips', username: '/u/LifeProTips_SS', dateAdded: '2015-06-17' },
    { subreddit: 'reactiongifs', username: '/u/reactiongifs_SS', dateAdded: '2015-06-17' },
    { subreddit: 'history', username: '/u/history_SS', dateAdded: '2015-06-17' },
    { subreddit: 'jokes', username: '/u/Jokes_SS', dateAdded: '2015-06-17' },
    { subreddit: 'badphilosophy', username: '/u/badphilosophy_SS', dateAdded: '2015-06-17' },
    { subreddit: 'android', username: '/u/Android_SS', dateAdded: '2015-06-17' },
    { subreddit: 'frugal', username: '/u/Frugal_SS', dateAdded: '2015-06-17' },
    { subreddit: 'shittyaskscience', username: '/u/shittyaskscience_SS', dateAdded: '2015-06-17' },
    { subreddit: 'starwars', username: '/u/StarWars_SS', dateAdded: '2015-06-17' },
    { subreddit: 'startrek', username: '/u/startrek_SS', dateAdded: '2015-06-17' },
    { subreddit: 'rpg', username: '/u/rpg_SS', dateAdded: '2015-06-17' },
    { subreddit: 'makeupaddiction', username: '/u/MakeupAddiction_SS', dateAdded: '2015-06-17' },
    { subreddit: 'skincareaddiction', username: '/u/SkincareAddiction_SS', dateAdded: '2015-06-17' },
    { subreddit: 'blackpeopletwitter', username: '/u/BlackPeopleTwitterSS', dateAdded: '2015-06-18' },
    { subreddit: 'apple', username: '/u/apple_SS', dateAdded: '2015-06-18' },
    { subreddit: 'relationships', username: '/u/relationships_SS', dateAdded: '2015-06-25' },
    { subreddit: 'outoftheloop', username: '/u/OutOfTheLoop_SS', dateAdded: '2015-06-25' },
    { subreddit: 'fantasy', username: '/u/fantasy_SS', dateAdded: '2015-06-25' },
    { subreddit: 'scifi', username: '/u/scifi_SS', dateAdded: '2015-06-25' },
    { subreddit: 'shittyreactiongifs', username: '/u/shittyreactiongifsSS', dateAdded: '2015-06-27' },
    { subreddit: 'murica', username: '/u/MURICA_SS', dateAdded: '2015-06-27' },
    { subreddit: 'harrypotter', username: '/u/harrypotter_SS', dateAdded: '2015-06-27' },
    { subreddit: 'ledootgeneration', username: '/u/ledootgeneration_SS', dateAdded: '2015-06-27' },
    { subreddit: 'shitredditsays', username: '/u/ShitRedditSays_SS', dateAdded: '2015-06-27' },
    { subreddit: 'imgoingtohellforthis', username: '/u/ImGoing2Hell4This_SS', dateAdded: '2015-06-27' },
    { subreddit: 'casualconversation', username: '/u/CasualConversationSS', dateAdded: '2015-06-27' },
    { subreddit: 'furry', username: '/u/furry_SS', dateAdded: '2015-06-27' },
    { subreddit: 'lgbt', username: '/u/LGBT_SS', dateAdded: '2015-06-27' },
    { subreddit: 'conservative', username: '/u/Conservative_SS', dateAdded: '2015-06-27' },
    { subreddit: 'hearthstone', username: '/u/hearthstone_SS', dateAdded: '2015-06-27' },
    { subreddit: 'smashbros', username: '/u/smashbros_SS', dateAdded: '2015-06-27' },
    { subreddit: 'whowouldwin', username: '/u/whowouldwin_SS', dateAdded: '2015-06-27' },
    { subreddit: 'linux', username: '/u/linux_SS', dateAdded: '2015-06-27' },
    { subreddit: 'sysadmin', username: '/u/sysadmin_SS', dateAdded: '2015-06-27' },
    { subreddit: 'guns', username: '/u/guns_SS', dateAdded: '2015-06-27' },
    { subreddit: 'wtf', username: '/u/WTF-SS', dateAdded: '2015-06-27' },
    { subreddit: 'mma', username: '/u/MMA_SS', dateAdded: '2015-06-27' },
    { subreddit: 'military', username: '/u/Military_SS', dateAdded: '2015-06-27' },
    { subreddit: 'magictcg', username: '/u/magicTCG_SS', dateAdded: '2015-06-27' },
    { subreddit: 'britishproblems', username: '/u/britishproblems_SS', dateAdded: '2015-06-27' },
    { subreddit: 'globaloffensive', username: '/u/GlobalOffensive_SS', dateAdded: '2015-06-27' },
    { subreddit: 'kerbalspaceprogram', username: '/u/KerbalSpaceProgramSS', dateAdded: '2015-06-27' },
    { subreddit: 'teenagers', username: '/u/teenagers_SS', dateAdded: '2015-06-27' },
    { subreddit: 'eve', username: '/u/Eve_SS', dateAdded: '2015-06-27' },
    { subreddit: 'oldpeoplefacebook', username: '/u/oldpeoplefacebook_SS', dateAdded: '2015-07-19' },
    { subreddit: 'crazyideas', username: '/u/CrazyIdeas_SS', dateAdded: '2015-07-19' },
    { subreddit: 'outside', username: '/u/outside_SS', dateAdded: '2015-07-19' },
    { subreddit: 'justrolledintotheshop', username: '/u/Justrolledinshop_SS', dateAdded: '2015-07-19' },
    { subreddit: 'circlebroke', username: '/u/circlebroke_SS', dateAdded: '2015-07-19' },
    { subreddit: 'sweden', username: '/u/sweden_SS', dateAdded: '2015-07-19' },
    { subreddit: 'nofap', username: '/u/NoFap_SS', dateAdded: '2015-07-19' },
    { subreddit: 'scenesfromahat', username: '/u/ScenesFromAHat_SS', dateAdded: '2015-07-19' },
    { subreddit: 'fifthworldproblems', username: '/u/fifthworldproblemsSS', dateAdded: '2015-07-19' },
    { subreddit: 'ooer', username: '/u/Ooer_SS', dateAdded: '2015-07-19' },
    { subreddit: 'uwotm8', username: '/u/uwotm8_SS', dateAdded: '2015-07-19' },
    { subreddit: 'floridaman', username: '/u/FloridaMan_SS', dateAdded: '2015-07-19' },
    { subreddit: 'karmacourt', username: '/u/KarmaCourt_SS', dateAdded: '2015-07-19' },
    { subreddit: 'anarchism', username: '/u/Anarchism_SS', dateAdded: '2015-07-19' },
    { subreddit: 'nottheonion', username: '/u/nottheonion-SS', dateAdded: '2015-07-19' },
    { subreddit: 'australia', username: '/u/australia_SS', dateAdded: '2015-07-19' },
    { subreddit: 'montageparodies', username: '/u/montageparodies_SS', dateAdded: '2015-07-19' },
    { subreddit: 'fantheories', username: '/u/FanTheories_SS', dateAdded: '2015-07-19' },
    { subreddit: 'dadjokes', username: '/u/dadjokes_SS', dateAdded: '2015-07-19' },
    { subreddit: 'justneckbeardthings', username: '/u/justneckbeardthingSS', dateAdded: '2015-07-19' },
    { subreddit: 'shittyfoodporn', username: '/u/shittyfoodporn_SS', dateAdded: '2015-07-19' },
    { subreddit: 'diy', username: '/u/DIY_SS', dateAdded: '2015-07-19' },
    { subreddit: 'letsnotmeet', username: '/u/LetsNotMeet-SS', dateAdded: '2015-07-19' },
    { subreddit: 'indianpeoplefacebook', username: '/u/indianpplfacebook_SS', dateAdded: '2015-07-19' },
    { subreddit: 'woahdude', username: '/u/woahdude_SS', dateAdded: '2015-07-19' },
    { subreddit: 'civ', username: '/u/civ_SS', dateAdded: '2015-07-19' },
    { subreddit: 'ireland', username: '/u/ireland_SS', dateAdded: '2015-07-19' },
    { subreddit: 'fallout', username: '/u/Fallout-SS', dateAdded: '2015-07-19' },
    { subreddit: 'boardgames', username: '/u/boardgames_SS', dateAdded: '2015-07-19' },
    { subreddit: 'earthporn', username: '/u/EarthPorn_SS', dateAdded: '2015-07-19' },
    { subreddit: 'seduction', username: '/u/seduction_SS', dateAdded: '2015-07-19' },
    { subreddit: 'gifs', username: '/u/gifs_SS', dateAdded: '2015-07-19' },
    { subreddit: 'bindingofisaac', username: '/u/bindingofisaac_SS', dateAdded: '2015-07-19' },
    { subreddit: 'sandersforpresident', username: '/u/Sanders4President_SS', dateAdded: '2015-07-19' },
    { subreddit: 'wheredidthesodago', username: '/u/wheredidthesodago_SS', dateAdded: '2015-07-19' },
    { subreddit: 'offmychest', username: '/u/offmychest_SS', dateAdded: '2015-07-19' },
    { subreddit: 'protectandserve', username: '/u/ProtectAndServe_SS', dateAdded: '2015-07-19' },
    { subreddit: 'confession', username: '/u/confession_SS', dateAdded: '2015-07-19' },
    { subreddit: 'vxjunkies', username: '/u/VXJunkies_SS', dateAdded: '2015-07-19' },
    { subreddit: 'fullcommunism', username: '/u/FULLCOMMUNISM_SS', dateAdded: '2015-07-19' },
    { subreddit: 'medicine', username: '/u/medicine_SS', dateAdded: '2015-07-19' },
    { subreddit: 'math', username: '/u/math_SS', dateAdded: '2015-07-19' },
    { subreddit: 'youshouldknow', username: '/u/YouShouldKnow_SS', dateAdded: '2015-07-19' },
    { subreddit: 'gaybros', username: '/u/gaybros_SS', dateAdded: '2015-07-19' },
    { subreddit: 'beer', username: '/u/beer_SS', dateAdded: '2015-07-19' },
    { subreddit: 'dogs', username: '/u/dogs_SS', dateAdded: '2015-07-19' },
    { subreddit: 'cats', username: '/u/cats_SS', dateAdded: '2015-07-19' },
    { subreddit: 'iamverysmart', username: '/u/iamverysmart-SS', dateAdded: '2015-07-19' },
    { subreddit: 'lewronggeneration', username: '/u/lewronggeneration-SS', dateAdded: '2015-07-19' },
    { subreddit: 'skyrim', username: '/u/skyrim_SS', dateAdded: '2015-07-19' },
    { subreddit: 'nba', username: '/u/nba_SS', dateAdded: '2015-07-19' },
    { subreddit: 'forwardsfromgrandma', username: '/u/fwdsfromgrandma_SS', dateAdded: '2015-07-19' },
    { subreddit: 'anarcho_capitalism', username: '/u/Anarcho_CapitalismSS', dateAdded: '2015-07-19' },
    { subreddit: 'socialism', username: '/u/Socialism_SS', dateAdded: '2015-07-19' },
    { subreddit: 'gonewildstories', username: '/u/gonewildstories_SS', dateAdded: '2015-08-08' },
    { subreddit: 'totallynotrobots', username: '/u/totallynotrobots_SS', dateAdded: '2015-08-08' },
    { subreddit: 'notinteresting', username: '/u/notinteresting_SS', dateAdded: '2015-08-08' },
    { subreddit: 'vegan', username: '/u/vegan_SS', dateAdded: '2015-08-08' },
    { subreddit: 'space', username: '/u/space_SS', dateAdded: '2015-08-08' },
    { subreddit: 'askmen', username: '/u/AskMen_SS', dateAdded: '2015-08-08' },
    { subreddit: 'askwomen', username: '/u/AskWomen_SS', dateAdded: '2015-08-08' },
    { subreddit: 'zen', username: '/u/zen_SS', dateAdded: '2015-08-08' },
    { subreddit: 'canada', username: '/u/canada_SS', dateAdded: '2015-08-08' },
    { subreddit: 'mexico', username: '/u/mexico_SS', dateAdded: '2015-08-08' },
    { subreddit: 'cfb', username: '/u/CFB_SS', dateAdded: '2015-08-08' },
    { subreddit: 'hockey', username: '/u/hockey-SS', dateAdded: '2015-08-08' },
    { subreddit: 'tf2', username: '/u/tf2_SS', dateAdded: '2015-08-08' },
    { subreddit: 'creepy', username: '/u/creepy-SS', dateAdded: '2015-08-08' },
    { subreddit: 'paranormal', username: '/u/paranormal_SS', dateAdded: '2015-08-08' },
    { subreddit: 'dnd', username: '/u/DnD_SS', dateAdded: '2015-08-08' },
    { subreddit: 'syriancivilwar', username: '/u/syriancivilwar_SS', dateAdded: '2015-08-08' },
    { subreddit: 'formula1', username: '/u/formula1_SS', dateAdded: '2015-08-08' },
    { subreddit: 'buildapc', username: '/u/buildapc-SS', dateAdded: '2015-08-08' },
    { subreddit: 'thathappened', username: '/u/thatHappened_SS', dateAdded: '2015-08-08' },
    { subreddit: 'keto', username: '/u/keto_SS', dateAdded: '2015-08-08' },
    { subreddit: 'baseball', username: '/u/baseball_SS', dateAdded: '2015-08-08' },
    { subreddit: 'running', username: '/u/running_SS', dateAdded: '2015-08-08' },
    { subreddit: 'raisedbynarcissists', username: '/u/raisedbynarcissistSS', dateAdded: '2015-08-08' },
    { subreddit: 'awwducational', username: '/u/Awwducational_SS', dateAdded: '2015-08-08' },
    { subreddit: 'india', username: '/u/india_SS', dateAdded: '2015-08-08' },
    { subreddit: 'poker', username: '/u/poker_SS', dateAdded: '2015-08-08' },
    { subreddit: 'motorcycles', username: '/u/motorcycles_SS', dateAdded: '2015-08-08' },
    { subreddit: 'electronic_cigarette', username: '/u/electronic_cig_SS', dateAdded: '2015-08-08' },
    { subreddit: 'darknetmarkets', username: '/u/DarkNetMarkets_SS', dateAdded: '2015-08-08' },
    { subreddit: 'destinythegame', username: '/u/DestinyTheGame_SS', dateAdded: '2015-08-08' },
    { subreddit: 'roastme', username: '/u/RoastMe_SS', dateAdded: '2015-08-30' },
    { subreddit: 'opiates', username: '/u/opiates_SS', dateAdded: '2015-08-30' },
    { subreddit: 'cringepics', username: '/u/cringepics_SS', dateAdded: '2015-08-30' },
    { subreddit: 'justiceporn', username: '/u/JusticePorn_SS', dateAdded: '2015-08-30' },
    { subreddit: 'undelete', username: '/u/undelete_SS', dateAdded: '2015-08-30' },
    { subreddit: 'truereddit', username: '/u/TrueReddit_SS', dateAdded: '2015-08-30' },
    { subreddit: 'dataisbeautiful', username: '/u/dataisbeautiful_SS', dateAdded: '2015-08-30' },
    { subreddit: 'oddlysatisfying', username: '/u/oddlysatisfying_SS', dateAdded: '2015-08-30' },
    { subreddit: 'nonononoyes', username: '/u/nonononoyes_SS', dateAdded: '2015-08-30' },
    { subreddit: 'fatlogic', username: '/u/fatlogic_SS', dateAdded: '2015-08-30' },
    { subreddit: 'pettyrevenge', username: '/u/pettyrevenge_SS', dateAdded: '2015-08-30' },
    { subreddit: 'crappydesign', username: '/u/CrappyDesign_SS', dateAdded: '2015-08-30' },
    { subreddit: 'creepypms', username: '/u/creepyPMs_SS', dateAdded: '2015-08-30' },
    { subreddit: 'trashy', username: '/u/trashy-SS', dateAdded: '2015-08-30' },
    { subreddit: 'fellowkids', username: '/u/FellowKids_SS', dateAdded: '2015-08-30' },
    { subreddit: 'jontron', username: '/u/JonTron-SS', dateAdded: '2015-08-30' },
    { subreddit: 'twitchplayspokemon', username: '/u/twitchplayspokemonSS', dateAdded: '2015-08-30' },
    { subreddit: 'indieheads', username: '/u/indieheads_SS', dateAdded: '2015-08-30' },
    { subreddit: 'whatisthisthing', username: '/u/whatisthisthing_SS', dateAdded: '2015-08-30' },
    { subreddit: 'splatoon', username: '/u/splatoon_SS', dateAdded: '2015-08-30' },
    { subreddit: 'metalgearsolid', username: '/u/metalgearsolid_SS', dateAdded: '2015-08-30' },
    { subreddit: 'travel', username: '/u/travel_SS', dateAdded: '2015-08-30' },
    { subreddit: 'nostupidquestions', username: '/u/NoStupidQuestions_SS', dateAdded: '2015-08-30' },
    { subreddit: 'nintendo', username: '/u/nintendo_SS', dateAdded: '2015-08-30' },
    { subreddit: 'tinder', username: '/u/Tinder_SS', dateAdded: '2015-08-30' },
    { subreddit: 'france', username: '/u/france_SS', dateAdded: '2015-08-30' },
    { subreddit: 'de', username: '/u/de_SS', dateAdded: '2015-08-30' },
    { subreddit: 'holdmybeer', username: '/u/holdmybeer-SS', dateAdded: '2015-08-30' },
    { subreddit: 'headphones', username: '/u/headphones_SS', dateAdded: '2015-08-30' },
    { subreddit: 'conlangs', username: '/u/conlangs_SS', dateAdded: '2015-08-30' },
    { subreddit: 'vinyl', username: '/u/vinyl_SS', dateAdded: '2015-08-30' },
    { subreddit: 'cooking', username: '/u/cooking_SS', dateAdded: '2015-08-30' },
    { subreddit: 'unitedkingdom', username: '/u/unitedkingdom_SS', dateAdded: '2015-08-30' },
    { subreddit: 'me_irl', username: '/u/me_irl-SS', dateAdded: '2015-08-30' },
    { subreddit: 'getmotivated', username: '/u/GetMotivated_SS', dateAdded: '2015-08-30' },
    { subreddit: 'psychonaut', username: '/u/Psychonaut_SS', dateAdded: '2015-08-30' },
    { subreddit: 'luciddreaming', username: '/u/LucidDreaming_SS', dateAdded: '2015-08-30' },
    { subreddit: 'sports', username: '/u/sports_SS', dateAdded: '2015-08-30' },
    { subreddit: 'techsupport', username: '/u/techsupport_SS', dateAdded: '2015-08-30' },
    { subreddit: 'amiibo', username: '/u/amiibo_SS', dateAdded: '2015-08-30' },
    { subreddit: 'coffee', username: '/u/coffee_SS', dateAdded: '2015-08-30' },
    { subreddit: 'aquariums', username: '/u/Aquariums_SS', dateAdded: '2015-08-30' },
    { subreddit: 'tipofmytongue', username: '/u/tipofmytongue_SS', dateAdded: '2015-08-30' },
    { subreddit: 'the_donald', username: '/u/The_Donald-SS', dateAdded: '2016-08-05' },
    { subreddit: 'kenm', username: '/u/KenM-SS', dateAdded: '2016-08-05' },
    { subreddit: 'pokemongo', username: '/u/pokemongo_SS', dateAdded: '2016-08-05' },
    { subreddit: 'overwatch', username: '/u/Overwatch_SS', dateAdded: '2016-08-05' },
    { subreddit: 'photoshopbattles', username: '/u/photoshopbattles-SS', dateAdded: '2016-08-05' },
    { subreddit: 'oldschoolcool', username: '/u/OldSchoolCool_SS', dateAdded: '2016-08-05' },
    { subreddit: 'stevenuniverse', username: '/u/stevenuniverse_SS', dateAdded: '2016-08-05' },
    { subreddit: 'rupaulsdragrace', username: '/u/rupaulsdragrace-SS', dateAdded: '2016-08-05' },
    { subreddit: 'rocketleague', username: '/u/RocketLeague_SS', dateAdded: '2016-08-05' },
    { subreddit: 'worldbuilding', username: '/u/worldbuilding_SS', dateAdded: '2016-08-05' },
    { subreddit: 'golf', username: '/u/golf_SS', dateAdded: '2016-08-05' },
    { subreddit: 'china', username: '/u/China_SS', dateAdded: '2016-08-05' },
    { subreddit: 'japan', username: '/u/japan_SS', dateAdded: '2016-08-05' },
    { subreddit: 'bigbrother', username: '/u/BigBrother_SS', dateAdded: '2016-08-05' },
    { subreddit: 'okcupid', username: '/u/OkCupid_SS', dateAdded: '2016-08-05' },
    { subreddit: 'bodybuilding', username: '/u/bodybuilding_SS', dateAdded: '2016-08-05' },
    { subreddit: 'interestingasfuck', username: '/u/interestingasfuck_SS', dateAdded: '2016-08-05' }
];

module.exports = ssBotList;
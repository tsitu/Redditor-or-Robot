const ssBotList = [
  { subreddit: 'askhistorians', username: 'AskHistorians_SS', dateAdded: '2015-06-06' },
  { subreddit: 'askscience', username: 'AskScience_SS', dateAdded: '2015-06-06' },
  { subreddit: 'pcmasterrace', username: 'pcmasterrace_SS', dateAdded: '2015-06-06' },
  { subreddit: 'gonewild', username: 'gonewild_SS', dateAdded: '2015-06-06' },
  { subreddit: 'conspiracy', username: 'conspiracy_SS', dateAdded: '2015-06-06' },
  { subreddit: 'circlejerk', username: 'circlejerk_SS', dateAdded: '2015-06-06' },
  { subreddit: 'funny', username: 'funny_SS', dateAdded: '2015-06-07' },
  { subreddit: 'pics', username: 'pics_SS', dateAdded: '2015-06-07' },
  { subreddit: 'askreddit', username: 'AskReddit_SS', dateAdded: '2015-06-08' },
  { subreddit: 'movies', username: 'movies_SS', dateAdded: '2015-06-08' },
  { subreddit: 'music', username: 'Music_SS', dateAdded: '2015-06-08' },
  { subreddit: 'books', username: 'books_SS', dateAdded: '2015-06-08' },
  { subreddit: 'food', username: 'food_SS', dateAdded: '2015-06-08' },
  { subreddit: 'trees', username: 'trees_SS', dateAdded: '2015-06-08' },
  { subreddit: 'gaming', username: 'gaming_SS', dateAdded: '2015-06-08' },
  { subreddit: 'aww', username: 'aww_SS', dateAdded: '2015-06-08' },
  { subreddit: 'todayilearned', username: 'todayilearned_SS', dateAdded: '2015-06-08' },
  { subreddit: 'tifu', username: 'tifu_SS', dateAdded: '2015-06-08' },
  { subreddit: 'adviceanimals', username: 'AdviceAnimals_SS', dateAdded: '2015-06-08' },
  { subreddit: '4chan', username: '4chan_SS', dateAdded: '2015-06-08' },
  { subreddit: 'television', username: 'television_SS', dateAdded: '2015-06-08' },
  { subreddit: 'explainlikeimfive', username: 'explainlikeimfive_SS', dateAdded: '2015-06-08' },
  { subreddit: 'atheism', username: 'atheism_SS', dateAdded: '2015-06-08' },
  { subreddit: 'news', username: 'news_SS', dateAdded: '2015-06-08' },
  { subreddit: 'worldnews', username: 'worldnews_SS', dateAdded: '2015-06-08' },
  { subreddit: 'politics', username: 'politics_SS', dateAdded: '2015-06-08' },
  { subreddit: 'writingprompts', username: 'writingprompts_SS', dateAdded: '2015-06-08' },
  { subreddit: 'fitness', username: 'fitness_SS', dateAdded: '2015-06-08' },
  { subreddit: 'iama', username: 'IAmA_SS', dateAdded: '2015-06-08' },
  { subreddit: 'programming', username: 'programming_SS', dateAdded: '2015-06-08' },
  { subreddit: 'showerthoughts', username: 'Showerthoughts_SS', dateAdded: '2015-06-09' },
  { subreddit: 'kotakuinaction', username: 'KotakuInAction_SS', dateAdded: '2015-06-09' },
  { subreddit: 'bitcoin', username: 'Bitcoin_SS', dateAdded: '2015-06-09' },
  { subreddit: 'pokemon', username: 'pokemon_SS', dateAdded: '2015-06-09' },
  { subreddit: 'malefashionadvice', username: 'malefashionadvice_SS', dateAdded: '2015-06-09' },
  { subreddit: 'theredpill', username: 'TheRedPill_SS', dateAdded: '2015-06-09' },
  { subreddit: 'twoxchromosomes', username: 'TwoXChromosomes_SS', dateAdded: '2015-06-09' },
  { subreddit: 'subredditdrama', username: 'SubredditDrama_SS', dateAdded: '2015-06-09' },
  { subreddit: 'asoiaf', username: 'asoiaf_SS', dateAdded: '2015-06-09' },
  { subreddit: 'nfl', username: 'nfl_SS', dateAdded: '2015-06-09' },
  { subreddit: 'legaladvice', username: 'LegalAdvice_SS', dateAdded: '2015-06-09' },
  { subreddit: 'soccer', username: 'soccer_SS', dateAdded: '2015-06-09' },
  { subreddit: 'anime', username: 'anime_SS', dateAdded: '2015-06-09' },
  { subreddit: 'videos', username: 'videos_SS', dateAdded: '2015-06-09' },
  { subreddit: 'leagueoflegends', username: 'leagueoflegends_SS', dateAdded: '2015-06-10' },
  { subreddit: 'hiphopheads', username: 'hiphopheads_SS', dateAdded: '2015-06-11' },
  { subreddit: 'changemyview', username: 'changemyview_SS', dateAdded: '2015-06-11' },
  { subreddit: 'badhistory', username: 'badhistory_SS', dateAdded: '2015-06-11' },
  { subreddit: 'sex', username: 'sex_SS', dateAdded: '2015-06-12' },
  { subreddit: 'games', username: 'Games_SS', dateAdded: '2015-06-12' },
  { subreddit: 'nosleep', username: 'nosleep_SS', dateAdded: '2015-06-12' },
  { subreddit: 'squaredcircle', username: 'SquaredCircle_SS', dateAdded: '2015-06-12' },
  { subreddit: 'libertarian', username: 'Libertarian_SS', dateAdded: '2015-06-12' },
  { subreddit: 'trollxchromosomes', username: 'TrollXChromosomes_SS', dateAdded: '2015-06-12' },
  { subreddit: 'cringe', username: 'cringe_SS', dateAdded: '2015-06-12' },
  { subreddit: 'crusaderkings', username: 'CrusaderKings_SS', dateAdded: '2015-06-12' },
  { subreddit: 'polandball', username: 'polandball_SS', dateAdded: '2015-06-12' },
  { subreddit: 'wow', username: 'wow_SS', dateAdded: '2015-06-12' },
  { subreddit: 'tumblrinaction', username: 'tumblrinaction_SS', dateAdded: '2015-06-12' },
  { subreddit: 'europe', username: 'europe_SS', dateAdded: '2015-06-12' },
  { subreddit: 'comicbooks', username: 'comicbooks_SS', dateAdded: '2015-06-12' },
  { subreddit: 'mylittlepony', username: 'mylittlepony_SS', dateAdded: '2015-06-12' },
  { subreddit: 'cars', username: 'cars_SS', dateAdded: '2015-06-12' },
  { subreddit: 'parenting', username: 'parenting_SS', dateAdded: '2015-06-12' },
  { subreddit: 'childfree', username: 'childfree_SS', dateAdded: '2015-06-12' },
  { subreddit: 'mildlyinteresting', username: 'mildlyinteresting_SS', dateAdded: '2015-06-12' },
  { subreddit: '2007scape', username: '2007scape_SS', dateAdded: '2015-06-12' },
  { subreddit: 'drugs', username: 'drugs_SS', dateAdded: '2015-06-12' },
  { subreddit: 'dota2', username: 'dota2_SS', dateAdded: '2015-06-12' },
  { subreddit: 'christianity', username: 'Christianity_SS', dateAdded: '2015-06-12' },
  { subreddit: 'mensrights', username: 'MensRights_SS', dateAdded: '2015-06-12' },
  { subreddit: 'dwarffortress', username: 'dwarffortress_SS', dateAdded: '2015-06-12' },
  { subreddit: 'minecraft', username: 'Minecraft_SS', dateAdded: '2015-06-12' },
  { subreddit: 'science', username: 'science_SS', dateAdded: '2015-06-12' },
  { subreddit: 'technology', username: 'technology_SS', dateAdded: '2015-06-12' },
  { subreddit: 'futurology', username: 'Futurology_SS', dateAdded: '2015-06-12' },
  { subreddit: 'personalfinance', username: 'personalfinance_SS', dateAdded: '2015-06-12' },
  { subreddit: 'talesfromtechsupport', username: 'TalesFromTechSupp_SS', dateAdded: '2015-06-17' },
  { subreddit: 'talesfromretail', username: 'TalesFromRetail_SS', dateAdded: '2015-06-17' },
  { subreddit: 'lifeprotips', username: 'LifeProTips_SS', dateAdded: '2015-06-17' },
  { subreddit: 'reactiongifs', username: 'reactiongifs_SS', dateAdded: '2015-06-17' },
  { subreddit: 'history', username: 'history_SS', dateAdded: '2015-06-17' },
  { subreddit: 'jokes', username: 'Jokes_SS', dateAdded: '2015-06-17' },
  { subreddit: 'badphilosophy', username: 'badphilosophy_SS', dateAdded: '2015-06-17' },
  { subreddit: 'android', username: 'Android_SS', dateAdded: '2015-06-17' },
  { subreddit: 'frugal', username: 'Frugal_SS', dateAdded: '2015-06-17' },
  { subreddit: 'shittyaskscience', username: 'shittyaskscience_SS', dateAdded: '2015-06-17' },
  { subreddit: 'starwars', username: 'StarWars_SS', dateAdded: '2015-06-17' },
  { subreddit: 'startrek', username: 'startrek_SS', dateAdded: '2015-06-17' },
  { subreddit: 'rpg', username: 'rpg_SS', dateAdded: '2015-06-17' },
  { subreddit: 'makeupaddiction', username: 'MakeupAddiction_SS', dateAdded: '2015-06-17' },
  { subreddit: 'skincareaddiction', username: 'SkincareAddiction_SS', dateAdded: '2015-06-17' },
  { subreddit: 'blackpeopletwitter', username: 'BlackPeopleTwitterSS', dateAdded: '2015-06-18' },
  { subreddit: 'apple', username: 'apple_SS', dateAdded: '2015-06-18' },
  { subreddit: 'relationships', username: 'relationships_SS', dateAdded: '2015-06-25' },
  { subreddit: 'outoftheloop', username: 'OutOfTheLoop_SS', dateAdded: '2015-06-25' },
  { subreddit: 'fantasy', username: 'fantasy_SS', dateAdded: '2015-06-25' },
  { subreddit: 'scifi', username: 'scifi_SS', dateAdded: '2015-06-25' },
  { subreddit: 'shittyreactiongifs', username: 'shittyreactiongifsSS', dateAdded: '2015-06-27' },
  { subreddit: 'murica', username: 'MURICA_SS', dateAdded: '2015-06-27' },
  { subreddit: 'harrypotter', username: 'harrypotter_SS', dateAdded: '2015-06-27' },
  { subreddit: 'ledootgeneration', username: 'ledootgeneration_SS', dateAdded: '2015-06-27' },
  { subreddit: 'shitredditsays', username: 'ShitRedditSays_SS', dateAdded: '2015-06-27' },
  { subreddit: 'imgoingtohellforthis', username: 'ImGoing2Hell4This_SS', dateAdded: '2015-06-27' },
  { subreddit: 'casualconversation', username: 'CasualConversationSS', dateAdded: '2015-06-27' },
  { subreddit: 'furry', username: 'furry_SS', dateAdded: '2015-06-27' },
  { subreddit: 'lgbt', username: 'LGBT_SS', dateAdded: '2015-06-27' },
  { subreddit: 'conservative', username: 'Conservative_SS', dateAdded: '2015-06-27' },
  { subreddit: 'hearthstone', username: 'hearthstone_SS', dateAdded: '2015-06-27' },
  { subreddit: 'smashbros', username: 'smashbros_SS', dateAdded: '2015-06-27' },
  { subreddit: 'whowouldwin', username: 'whowouldwin_SS', dateAdded: '2015-06-27' },
  { subreddit: 'linux', username: 'linux_SS', dateAdded: '2015-06-27' },
  { subreddit: 'sysadmin', username: 'sysadmin_SS', dateAdded: '2015-06-27' },
  { subreddit: 'guns', username: 'guns_SS', dateAdded: '2015-06-27' },
  { subreddit: 'wtf', username: 'WTF-SS', dateAdded: '2015-06-27' },
  { subreddit: 'mma', username: 'MMA_SS', dateAdded: '2015-06-27' },
  { subreddit: 'military', username: 'Military_SS', dateAdded: '2015-06-27' },
  { subreddit: 'magictcg', username: 'magicTCG_SS', dateAdded: '2015-06-27' },
  { subreddit: 'britishproblems', username: 'britishproblems_SS', dateAdded: '2015-06-27' },
  { subreddit: 'globaloffensive', username: 'GlobalOffensive_SS', dateAdded: '2015-06-27' },
  { subreddit: 'kerbalspaceprogram', username: 'KerbalSpaceProgramSS', dateAdded: '2015-06-27' },
  { subreddit: 'teenagers', username: 'teenagers_SS', dateAdded: '2015-06-27' },
  { subreddit: 'eve', username: 'Eve_SS', dateAdded: '2015-06-27' },
  { subreddit: 'oldpeoplefacebook', username: 'oldpeoplefacebook_SS', dateAdded: '2015-07-19' },
  { subreddit: 'crazyideas', username: 'CrazyIdeas_SS', dateAdded: '2015-07-19' },
  { subreddit: 'outside', username: 'outside_SS', dateAdded: '2015-07-19' },
  { subreddit: 'justrolledintotheshop', username: 'Justrolledinshop_SS', dateAdded: '2015-07-19' },
  { subreddit: 'circlebroke', username: 'circlebroke_SS', dateAdded: '2015-07-19' },
  { subreddit: 'sweden', username: 'sweden_SS', dateAdded: '2015-07-19' },
  { subreddit: 'nofap', username: 'NoFap_SS', dateAdded: '2015-07-19' },
  { subreddit: 'scenesfromahat', username: 'ScenesFromAHat_SS', dateAdded: '2015-07-19' },
  { subreddit: 'fifthworldproblems', username: 'fifthworldproblemsSS', dateAdded: '2015-07-19' },
  { subreddit: 'ooer', username: 'Ooer_SS', dateAdded: '2015-07-19' },
  { subreddit: 'uwotm8', username: 'uwotm8_SS', dateAdded: '2015-07-19' },
  { subreddit: 'floridaman', username: 'FloridaMan_SS', dateAdded: '2015-07-19' },
  { subreddit: 'karmacourt', username: 'KarmaCourt_SS', dateAdded: '2015-07-19' },
  { subreddit: 'anarchism', username: 'Anarchism_SS', dateAdded: '2015-07-19' },
  { subreddit: 'nottheonion', username: 'nottheonion-SS', dateAdded: '2015-07-19' },
  { subreddit: 'australia', username: 'australia_SS', dateAdded: '2015-07-19' },
  { subreddit: 'montageparodies', username: 'montageparodies_SS', dateAdded: '2015-07-19' },
  { subreddit: 'fantheories', username: 'FanTheories_SS', dateAdded: '2015-07-19' },
  { subreddit: 'dadjokes', username: 'dadjokes_SS', dateAdded: '2015-07-19' },
  { subreddit: 'justneckbeardthings', username: 'justneckbeardthingSS', dateAdded: '2015-07-19' },
  { subreddit: 'shittyfoodporn', username: 'shittyfoodporn_SS', dateAdded: '2015-07-19' },
  { subreddit: 'diy', username: 'DIY_SS', dateAdded: '2015-07-19' },
  { subreddit: 'letsnotmeet', username: 'LetsNotMeet-SS', dateAdded: '2015-07-19' },
  { subreddit: 'indianpeoplefacebook', username: 'indianpplfacebook_SS', dateAdded: '2015-07-19' },
  { subreddit: 'woahdude', username: 'woahdude_SS', dateAdded: '2015-07-19' },
  { subreddit: 'civ', username: 'civ_SS', dateAdded: '2015-07-19' },
  { subreddit: 'ireland', username: 'ireland_SS', dateAdded: '2015-07-19' },
  { subreddit: 'fallout', username: 'Fallout-SS', dateAdded: '2015-07-19' },
  { subreddit: 'boardgames', username: 'boardgames_SS', dateAdded: '2015-07-19' },
  { subreddit: 'earthporn', username: 'EarthPorn_SS', dateAdded: '2015-07-19' },
  { subreddit: 'seduction', username: 'seduction_SS', dateAdded: '2015-07-19' },
  { subreddit: 'gifs', username: 'gifs_SS', dateAdded: '2015-07-19' },
  { subreddit: 'bindingofisaac', username: 'bindingofisaac_SS', dateAdded: '2015-07-19' },
  { subreddit: 'sandersforpresident', username: 'Sanders4President_SS', dateAdded: '2015-07-19' },
  { subreddit: 'wheredidthesodago', username: 'wheredidthesodago_SS', dateAdded: '2015-07-19' },
  { subreddit: 'offmychest', username: 'offmychest_SS', dateAdded: '2015-07-19' },
  { subreddit: 'protectandserve', username: 'ProtectAndServe_SS', dateAdded: '2015-07-19' },
  { subreddit: 'confession', username: 'confession_SS', dateAdded: '2015-07-19' },
  { subreddit: 'vxjunkies', username: 'VXJunkies_SS', dateAdded: '2015-07-19' },
  { subreddit: 'fullcommunism', username: 'FULLCOMMUNISM_SS', dateAdded: '2015-07-19' },
  { subreddit: 'medicine', username: 'medicine_SS', dateAdded: '2015-07-19' },
  { subreddit: 'math', username: 'math_SS', dateAdded: '2015-07-19' },
  { subreddit: 'youshouldknow', username: 'YouShouldKnow_SS', dateAdded: '2015-07-19' },
  { subreddit: 'gaybros', username: 'gaybros_SS', dateAdded: '2015-07-19' },
  { subreddit: 'beer', username: 'beer_SS', dateAdded: '2015-07-19' },
  { subreddit: 'dogs', username: 'dogs_SS', dateAdded: '2015-07-19' },
  { subreddit: 'cats', username: 'cats_SS', dateAdded: '2015-07-19' },
  { subreddit: 'iamverysmart', username: 'iamverysmart-SS', dateAdded: '2015-07-19' },
  { subreddit: 'lewronggeneration', username: 'lewronggeneration-SS', dateAdded: '2015-07-19' },
  { subreddit: 'skyrim', username: 'skyrim_SS', dateAdded: '2015-07-19' },
  { subreddit: 'nba', username: 'nba_SS', dateAdded: '2015-07-19' },
  { subreddit: 'forwardsfromgrandma', username: 'fwdsfromgrandma_SS', dateAdded: '2015-07-19' },
  { subreddit: 'anarcho_capitalism', username: 'Anarcho_CapitalismSS', dateAdded: '2015-07-19' },
  { subreddit: 'socialism', username: 'Socialism_SS', dateAdded: '2015-07-19' },
  { subreddit: 'gonewildstories', username: 'gonewildstories_SS', dateAdded: '2015-08-08' },
  { subreddit: 'totallynotrobots', username: 'totallynotrobots_SS', dateAdded: '2015-08-08' },
  { subreddit: 'notinteresting', username: 'notinteresting_SS', dateAdded: '2015-08-08' },
  { subreddit: 'vegan', username: 'vegan_SS', dateAdded: '2015-08-08' },
  { subreddit: 'space', username: 'space_SS', dateAdded: '2015-08-08' },
  { subreddit: 'askmen', username: 'AskMen_SS', dateAdded: '2015-08-08' },
  { subreddit: 'askwomen', username: 'AskWomen_SS', dateAdded: '2015-08-08' },
  { subreddit: 'zen', username: 'zen_SS', dateAdded: '2015-08-08' },
  { subreddit: 'canada', username: 'canada_SS', dateAdded: '2015-08-08' },
  { subreddit: 'mexico', username: 'mexico_SS', dateAdded: '2015-08-08' },
  { subreddit: 'cfb', username: 'CFB_SS', dateAdded: '2015-08-08' },
  { subreddit: 'hockey', username: 'hockey-SS', dateAdded: '2015-08-08' },
  { subreddit: 'tf2', username: 'tf2_SS', dateAdded: '2015-08-08' },
  { subreddit: 'creepy', username: 'creepy-SS', dateAdded: '2015-08-08' },
  { subreddit: 'paranormal', username: 'paranormal_SS', dateAdded: '2015-08-08' },
  { subreddit: 'dnd', username: 'DnD_SS', dateAdded: '2015-08-08' },
  { subreddit: 'syriancivilwar', username: 'syriancivilwar_SS', dateAdded: '2015-08-08' },
  { subreddit: 'formula1', username: 'formula1_SS', dateAdded: '2015-08-08' },
  { subreddit: 'buildapc', username: 'buildapc-SS', dateAdded: '2015-08-08' },
  { subreddit: 'thathappened', username: 'thatHappened_SS', dateAdded: '2015-08-08' },
  { subreddit: 'keto', username: 'keto_SS', dateAdded: '2015-08-08' },
  { subreddit: 'baseball', username: 'baseball_SS', dateAdded: '2015-08-08' },
  { subreddit: 'running', username: 'running_SS', dateAdded: '2015-08-08' },
  { subreddit: 'raisedbynarcissists', username: 'raisedbynarcissistSS', dateAdded: '2015-08-08' },
  { subreddit: 'awwducational', username: 'Awwducational_SS', dateAdded: '2015-08-08' },
  { subreddit: 'india', username: 'india_SS', dateAdded: '2015-08-08' },
  { subreddit: 'poker', username: 'poker_SS', dateAdded: '2015-08-08' },
  { subreddit: 'motorcycles', username: 'motorcycles_SS', dateAdded: '2015-08-08' },
  { subreddit: 'electronic_cigarette', username: 'electronic_cig_SS', dateAdded: '2015-08-08' },
  { subreddit: 'darknetmarkets', username: 'DarkNetMarkets_SS', dateAdded: '2015-08-08' },
  { subreddit: 'destinythegame', username: 'DestinyTheGame_SS', dateAdded: '2015-08-08' },
  { subreddit: 'roastme', username: 'RoastMe_SS', dateAdded: '2015-08-30' },
  { subreddit: 'opiates', username: 'opiates_SS', dateAdded: '2015-08-30' },
  { subreddit: 'cringepics', username: 'cringepics_SS', dateAdded: '2015-08-30' },
  { subreddit: 'justiceporn', username: 'JusticePorn_SS', dateAdded: '2015-08-30' },
  { subreddit: 'undelete', username: 'undelete_SS', dateAdded: '2015-08-30' },
  { subreddit: 'truereddit', username: 'TrueReddit_SS', dateAdded: '2015-08-30' },
  { subreddit: 'dataisbeautiful', username: 'dataisbeautiful_SS', dateAdded: '2015-08-30' },
  { subreddit: 'oddlysatisfying', username: 'oddlysatisfying_SS', dateAdded: '2015-08-30' },
  { subreddit: 'nonononoyes', username: 'nonononoyes_SS', dateAdded: '2015-08-30' },
  { subreddit: 'fatlogic', username: 'fatlogic_SS', dateAdded: '2015-08-30' },
  { subreddit: 'pettyrevenge', username: 'pettyrevenge_SS', dateAdded: '2015-08-30' },
  { subreddit: 'crappydesign', username: 'CrappyDesign_SS', dateAdded: '2015-08-30' },
  { subreddit: 'creepypms', username: 'creepyPMs_SS', dateAdded: '2015-08-30' },
  { subreddit: 'trashy', username: 'trashy-SS', dateAdded: '2015-08-30' },
  { subreddit: 'fellowkids', username: 'FellowKids_SS', dateAdded: '2015-08-30' },
  { subreddit: 'jontron', username: 'JonTron-SS', dateAdded: '2015-08-30' },
  { subreddit: 'twitchplayspokemon', username: 'twitchplayspokemonSS', dateAdded: '2015-08-30' },
  { subreddit: 'indieheads', username: 'indieheads_SS', dateAdded: '2015-08-30' },
  { subreddit: 'whatisthisthing', username: 'whatisthisthing_SS', dateAdded: '2015-08-30' },
  { subreddit: 'splatoon', username: 'splatoon_SS', dateAdded: '2015-08-30' },
  { subreddit: 'metalgearsolid', username: 'metalgearsolid_SS', dateAdded: '2015-08-30' },
  { subreddit: 'travel', username: 'travel_SS', dateAdded: '2015-08-30' },
  { subreddit: 'nostupidquestions', username: 'NoStupidQuestions_SS', dateAdded: '2015-08-30' },
  { subreddit: 'nintendo', username: 'nintendo_SS', dateAdded: '2015-08-30' },
  { subreddit: 'tinder', username: 'Tinder_SS', dateAdded: '2015-08-30' },
  { subreddit: 'france', username: 'france_SS', dateAdded: '2015-08-30' },
  { subreddit: 'de', username: 'de_SS', dateAdded: '2015-08-30' },
  { subreddit: 'holdmybeer', username: 'holdmybeer-SS', dateAdded: '2015-08-30' },
  { subreddit: 'headphones', username: 'headphones_SS', dateAdded: '2015-08-30' },
  { subreddit: 'conlangs', username: 'conlangs_SS', dateAdded: '2015-08-30' },
  { subreddit: 'vinyl', username: 'vinyl_SS', dateAdded: '2015-08-30' },
  { subreddit: 'cooking', username: 'cooking_SS', dateAdded: '2015-08-30' },
  { subreddit: 'unitedkingdom', username: 'unitedkingdom_SS', dateAdded: '2015-08-30' },
  { subreddit: 'me_irl', username: 'me_irl-SS', dateAdded: '2015-08-30' },
  { subreddit: 'getmotivated', username: 'GetMotivated_SS', dateAdded: '2015-08-30' },
  { subreddit: 'psychonaut', username: 'Psychonaut_SS', dateAdded: '2015-08-30' },
  { subreddit: 'luciddreaming', username: 'LucidDreaming_SS', dateAdded: '2015-08-30' },
  { subreddit: 'sports', username: 'sports_SS', dateAdded: '2015-08-30' },
  { subreddit: 'techsupport', username: 'techsupport_SS', dateAdded: '2015-08-30' },
  { subreddit: 'amiibo', username: 'amiibo_SS', dateAdded: '2015-08-30' },
  { subreddit: 'coffee', username: 'coffee_SS', dateAdded: '2015-08-30' },
  { subreddit: 'aquariums', username: 'Aquariums_SS', dateAdded: '2015-08-30' },
  { subreddit: 'tipofmytongue', username: 'tipofmytongue_SS', dateAdded: '2015-08-30' },
  { subreddit: 'the_donald', username: 'The_Donald-SS', dateAdded: '2016-08-05' },
  { subreddit: 'kenm', username: 'KenM-SS', dateAdded: '2016-08-05' },
  { subreddit: 'pokemongo', username: 'pokemongo_SS', dateAdded: '2016-08-05' },
  { subreddit: 'overwatch', username: 'Overwatch_SS', dateAdded: '2016-08-05' },
  { subreddit: 'photoshopbattles', username: 'photoshopbattles-SS', dateAdded: '2016-08-05' },
  { subreddit: 'oldschoolcool', username: 'OldSchoolCool_SS', dateAdded: '2016-08-05' },
  { subreddit: 'stevenuniverse', username: 'stevenuniverse_SS', dateAdded: '2016-08-05' },
  { subreddit: 'rupaulsdragrace', username: 'rupaulsdragrace-SS', dateAdded: '2016-08-05' },
  { subreddit: 'rocketleague', username: 'RocketLeague_SS', dateAdded: '2016-08-05' },
  { subreddit: 'worldbuilding', username: 'worldbuilding_SS', dateAdded: '2016-08-05' },
  { subreddit: 'golf', username: 'golf_SS', dateAdded: '2016-08-05' },
  { subreddit: 'china', username: 'China_SS', dateAdded: '2016-08-05' },
  { subreddit: 'japan', username: 'japan_SS', dateAdded: '2016-08-05' },
  { subreddit: 'bigbrother', username: 'BigBrother_SS', dateAdded: '2016-08-05' },
  { subreddit: 'okcupid', username: 'OkCupid_SS', dateAdded: '2016-08-05' },
  { subreddit: 'bodybuilding', username: 'bodybuilding_SS', dateAdded: '2016-08-05' },
  { subreddit: 'interestingasfuck', username: 'interestingasfuck_SS', dateAdded: '2016-08-05' },
];

module.exports = ssBotList;

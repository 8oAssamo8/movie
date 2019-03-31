/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 50626
 Source Host           : localhost:3306
 Source Schema         : php_movie

 Target Server Type    : MySQL
 Target Server Version : 50626
 File Encoding         : 65001

 Date: 07/01/2019 11:37:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for boxoffice
-- ----------------------------
DROP TABLE IF EXISTS `boxoffice`;
CREATE TABLE `boxoffice`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `boxOffice` float(6, 1) NOT NULL,
  `allBoxOffice` float(6, 1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of boxoffice
-- ----------------------------
INSERT INTO `boxoffice` VALUES (1, '海王/Aquaman(2018)', 'Inland', './public/upload/boxOffice/1.1.jpg', 'http://movie.mtime.com/132277/', 1500.4, 16.9);
INSERT INTO `boxoffice` VALUES (2, '蜘蛛侠：平行宇宙', 'Inland', './public/upload/boxOffice/1.2.jpg', 'http://movie.mtime.com/228745/', 1068.8, 2.4);
INSERT INTO `boxoffice` VALUES (3, '叶问外传：张天志', 'Inland', './public/upload/boxOffice/1.3.jpg', 'http://movie.mtime.com/234316/', 713.4, 8.7);
INSERT INTO `boxoffice` VALUES (4, '海王/Aquaman(2018)', 'NorthAmerica', './public/upload/boxOffice/2.1.jpg', 'http://movie.mtime.com/132277/', 1500.4, 16.9);
INSERT INTO `boxoffice` VALUES (5, '新欢乐满人间/Mary Poppins Returns(2018)', 'NorthAmerica', './public/upload/boxOffice/2.2.jpg', 'http://movie.mtime.com/228392/', 2223.5, 3.0);
INSERT INTO `boxoffice` VALUES (6, '大黄蜂/Bumblebee(2018)', 'NorthAmerica', './public/upload/boxOffice/2.3.jpg', 'http://movie.mtime.com/246986/', 2100.0, 2.0);
INSERT INTO `boxoffice` VALUES (7, '海王/Aquaman(2018)', 'Global', './public/upload/boxOffice/3.1.jpg', 'http://movie.mtime.com/132277/', 1500.4, 16.9);
INSERT INTO `boxoffice` VALUES (8, '蜘蛛侠：平行宇宙', 'Global', './public/upload/boxOffice/3.2.jpg', 'http://movie.mtime.com/228745/', 5470.0, 1.3);
INSERT INTO `boxoffice` VALUES (9, '大黄蜂/Bumblebee(2018)', 'Global', './public/upload/boxOffice/3.3.jpg', 'http://movie.mtime.com/246986/', 2100.0, 2.0);

-- ----------------------------
-- Table structure for broadcast
-- ----------------------------
DROP TABLE IF EXISTS `broadcast`;
CREATE TABLE `broadcast`  (
  `broadcastId` int(10) NOT NULL AUTO_INCREMENT,
  `broadcastTitle` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `broadcastContent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `broadcastURL` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `Number` int(10) NOT NULL DEFAULT 0,
  `broadcastTime` datetime(0) NOT NULL,
  `userid` int(10) DEFAULT NULL,
  PRIMARY KEY (`broadcastId`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  CONSTRAINT `broadcast_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of broadcast
-- ----------------------------
INSERT INTO `broadcast` VALUES (2, '《海王》与神话英雄养成指南', '正值《海王》热映，席路德兴高采烈地看完后，突然想到不妨把他与神话英雄养成模式对比食用，看看其中有哪些套路和非套路吧。 您或许注意到，尽管世上英雄千千万，他们的故事却不约而同地符合同一模式。泛泛而言，...', 'https://www.douban.com/note/701088190/', 6, '2018-12-12 13:21:25', 5);
INSERT INTO `broadcast` VALUES (3, '金张掖 | 西夏卧佛，祁连望雪', '正值《海王》热映，席路德兴高采烈地看完后，突然想到不妨把他与神话英雄养成模式对比食用，看看其中有哪些套路和非套路吧。 您或许注意到，尽管世上英雄千千万，他们的故事却不约而同地符合同一模式。泛泛而言，...', 'https://www.douban.com/note/701088190/', 4, '2018-12-12 13:21:25', 5);
INSERT INTO `broadcast` VALUES (4, '《海王》与神话英雄养成指南', '正值《海王》热映，席路德兴高采烈地看完后，突然想到不妨把他与神话英雄养成模式对比食用，看看其中有哪些套路和非套路吧。 您或许注意到，尽管世上英雄千千万，他们的故事却不约而同地符合同一模式。泛泛而言，...', 'https://www.douban.com/note/701088190/', 4, '2018-12-12 13:21:25', 7);

-- ----------------------------
-- Table structure for broadcastcomment
-- ----------------------------
DROP TABLE IF EXISTS `broadcastcomment`;
CREATE TABLE `broadcastcomment`  (
  `CommentId` int(10) NOT NULL AUTO_INCREMENT,
  `userComment` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `CNumber` int(10) NOT NULL DEFAULT 0,
  `broadcastCommentTime` datetime(0) NOT NULL,
  `userid` int(10) DEFAULT NULL,
  `broadcastId` int(10) DEFAULT NULL,
  PRIMARY KEY (`CommentId`) USING BTREE,
  INDEX `broadcastId`(`broadcastId`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  CONSTRAINT `broadcastcomment_ibfk_1` FOREIGN KEY (`broadcastId`) REFERENCES `broadcast` (`broadcastId`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `broadcastcomment_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of broadcastcomment
-- ----------------------------
INSERT INTO `broadcastcomment` VALUES (15, '说得真好', 1, '2018-12-27 09:06:38', 9, 2);
INSERT INTO `broadcastcomment` VALUES (16, '我觉得还行！！！', 1, '2018-12-27 09:18:57', 9, 2);
INSERT INTO `broadcastcomment` VALUES (17, '我觉得也还是挺不错的', 0, '2018-12-28 02:42:13', 7, 2);

-- ----------------------------
-- Table structure for collection
-- ----------------------------
DROP TABLE IF EXISTS `collection`;
CREATE TABLE `collection`  (
  `userId` int(10) NOT NULL,
  `movieId` int(11) NOT NULL,
  `time` datetime(0) NOT NULL ON UPDATE CURRENT_TIMESTAMP(0),
  PRIMARY KEY (`userId`, `movieId`) USING BTREE,
  CONSTRAINT `collection_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of collection
-- ----------------------------
INSERT INTO `collection` VALUES (5, 49, '2018-12-26 22:48:21');
INSERT INTO `collection` VALUES (5, 57, '2018-12-26 16:01:04');
INSERT INTO `collection` VALUES (5, 59, '2018-12-26 15:59:31');
INSERT INTO `collection` VALUES (5, 60, '2018-12-26 17:24:30');
INSERT INTO `collection` VALUES (6, 43, '2018-12-30 09:30:06');
INSERT INTO `collection` VALUES (6, 44, '2018-12-30 09:30:18');
INSERT INTO `collection` VALUES (6, 47, '2018-12-30 09:30:42');
INSERT INTO `collection` VALUES (6, 55, '2018-12-30 09:30:24');
INSERT INTO `collection` VALUES (6, 60, '2018-12-30 09:30:10');
INSERT INTO `collection` VALUES (6, 62, '2018-12-30 09:30:46');
INSERT INTO `collection` VALUES (6, 73, '2018-12-30 09:30:14');
INSERT INTO `collection` VALUES (6, 74, '2018-12-30 09:30:37');
INSERT INTO `collection` VALUES (7, 57, '2018-12-26 16:56:53');
INSERT INTO `collection` VALUES (7, 78, '2018-12-27 19:36:41');
INSERT INTO `collection` VALUES (7, 82, '2018-12-27 19:36:49');
INSERT INTO `collection` VALUES (9, 43, '2019-01-06 14:57:54');
INSERT INTO `collection` VALUES (9, 50, '2018-12-29 15:05:40');
INSERT INTO `collection` VALUES (9, 52, '2018-12-27 19:41:14');
INSERT INTO `collection` VALUES (9, 55, '2018-12-26 20:11:07');
INSERT INTO `collection` VALUES (9, 57, '2018-12-29 15:55:55');
INSERT INTO `collection` VALUES (9, 59, '2018-12-28 21:11:01');
INSERT INTO `collection` VALUES (9, 83, '2018-12-27 21:34:07');
INSERT INTO `collection` VALUES (9, 89, '2018-12-27 21:21:20');
INSERT INTO `collection` VALUES (9, 92, '2018-12-27 21:33:43');
INSERT INTO `collection` VALUES (9, 97, '2018-12-28 20:50:36');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `mid` int(11) NOT NULL,
  `date` int(11) NOT NULL,
  `content` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`cid`) USING BTREE,
  INDEX `midk`(`mid`) USING BTREE,
  INDEX `uid`(`uid`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 94 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES (52, 5, 61, 1545810293, '看的首映，男性导演是不是都热衷于青春期中兄弟两人同时看上一个女同学？然后女同学just是被挑选的对象。 又俗又没脑子。 这首映我怕是要提前离场……嘈多无口。（碍于盆友忍着看完 中国青春片，无论电影or动漫，实际上都是一场 “脸在场”的以高考为主要叙事结构的伪命题怀旧片。');
INSERT INTO `comment` VALUES (53, 6, 61, 1545810293, '怀旧情怀很好，但是细节不够到位。BG突然变BL是什么操作？？彩蛋里有人出柜了？？？');
INSERT INTO `comment` VALUES (83, 9, 59, 1545815849, '阿拉拉');
INSERT INTO `comment` VALUES (85, 9, 55, 1545827168, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (55, 8, 43, 1545810432, '原来龙猫的戏份这么少啊。');
INSERT INTO `comment` VALUES (56, 5, 43, 1545810432, '萌啊，给我一只龙猫吧');
INSERT INTO `comment` VALUES (57, 6, 43, 1545810432, '我好像看到小月和小梅坐在那棵松树上对我们笑。“搞不好真是她们呢。”');
INSERT INTO `comment` VALUES (58, 7, 43, 1545810432, '宫崎骏真是个内心柔软的天才。能给这个残酷的世界这么多温暖。龙猫真像童年时的一场梦，长大之后似乎忘记了，突然看见它毛茸茸的身躯，就想起了所有的奢望。');
INSERT INTO `comment` VALUES (59, 8, 57, 1545810662, '“你敢保证你一辈子不得病？”纯粹、直接、有力！常常感叹：电影只能是电影。但每看到这样的佳作，又感慨：电影不只是电影！由衷的希望这部电影大卖！成为话题！成为榜样！成为国产电影最该有的可能。');
INSERT INTO `comment` VALUES (60, 6, 57, 1545810662, '当然算不上杰作，但放豆瓣语境下，是部时至今日终于拍出来的国产“高分韩国电影”。拿现实题材拍商业类型片，社会意义摆在那，群戏也处理得相当不错。对我们国家而言，这样的电影多一部是一部，走一步是一步。');
INSERT INTO `comment` VALUES (61, 5, 57, 1545810662, '炸裂，哭成狗，从观影体验上看，比达拉斯买家俱乐部好，之间隔了差不多五个《动物世界》，导演处女作就这完成度，只能说剧本实在太好。我爸爸也是药神的受益者之一，否则我应该房子也没了。');
INSERT INTO `comment` VALUES (62, 6, 59, 1545810734, '《罗马》让人困惑之处在于，这个与导演紧密相连的“童年往事”却出奇的抽离，缺乏一个介入过去的有效视角。从私人记忆角度来看，影片无疑太冷峻太客观');
INSERT INTO `comment` VALUES (64, 8, 59, 1545810734, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (65, 5, 52, 1545812225, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (66, 6, 50, 1545812257, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (67, 6, 48, 1545812266, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (68, 5, 55, 1545812278, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (69, 8, 49, 1545812288, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (70, 8, 62, 1545812289, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (71, 8, 68, 1545812286, '这人世间的路太窄，不仅会处处碰壁，撞得遍体鳞伤，还会时不时踩到几坨狗屎。 但是，我们还可以去海边，洗尽铅华和晦气。 天边，夕阳正冉冉升起，燃烧着希望和力量。');
INSERT INTO `comment` VALUES (87, 7, 60, 1545979447, '人脸面具、阿汤长镜头跑步、开场录音任务三大系列传统一个没丢，同时也成功打破系列一部一个风格的传统。最大限度开发阿汤的身体魅力和明星光环，而他这股劲头逐年呈现与年龄反比的趋势，但不好的是你会觉得剧本几乎成为了他搏命噱头的陪衬，两次计中计都是看过N遍的老把戏。相比邦德和伯恩，亨特无疑用活力跟上了这个新时代。');
INSERT INTO `comment` VALUES (88, 7, 60, 1545979447, '阿汤哥凭借《碟中谍6》成为历史上第一个在镜头下真正做到HALO跳伞（超高空跳伞，超低空开伞）的演员。 HALO是从25000英尺（7620米）的高空跳伞，在2000英尺（609.6米）以下的低空开伞。这是一种用于躲过侦查、秘密潜入外国境内的空军跳伞技术，常被军方的特种部队使用，在阿汤哥之前从未有人在摄像机镜头前演绎过。 由于这段戏份在电影中是发生在晚上，剧组必须尽可能在接近日落时分拍摄，因此每天只有1次拍摄机会，每次只有3分钟的拍摄时间，阿汤哥一共拍了106次才完成HALO戏份。 阿汤哥固然牛逼，摄影师同样也很牛逼，一边跳伞还要一边摄像。 【片尾无彩蛋】');
INSERT INTO `comment` VALUES (89, 7, 44, 1545979945, '我大概是不觉得辛苦的，哪怕背负着隐晦的秘密面对再凌厉不过的逼迫，哪怕故土此生难回。\n\n只要落下来的时候有你接着我。\n不由分说随我穿寒风破冷云寻找一个虚无缥缈的目的地。\n毫不迟疑挡住落向我的拳头。\n坚定的守护我固执的决定，哪怕知道马上会死掉，也不犹豫的拉住我的手和我一起大声念出咒语。\n\n在云和风的顶端，我们摇摇晃晃，你在我身后，你的围巾在我脖子上。');
INSERT INTO `comment` VALUES (91, 9, 97, 1546001437, '很多中国观众肯定是冲着米叔去看的。不过很遗憾，这部片子是米叔拍给印度人民“过年”看的。这部片子上映时期正值印度举国欢庆最隆重节日“排灯节”。节日大片最重要的就是要阖家欢乐，老少咸宜；不动脑子地图个乐子。这样说吧，这部电影就像春节时候，梁朝伟（米叔），周润发（阿米达普），杨幂（卡特里娜），周冬雨（法缇玛）联合出演的反映鸦片战争时期，中国人民和英国殖民侵略者斗智斗勇的爱国贺岁大片。问题来了，如果你有一个外国朋友因为看了“无间道”而喜欢上梁朝伟，那么你会不会推荐他/她去看这部春节贺岁片呢？');

-- ----------------------------
-- Table structure for featuredlist
-- ----------------------------
DROP TABLE IF EXISTS `featuredlist`;
CREATE TABLE `featuredlist`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of featuredlist
-- ----------------------------
INSERT INTO `featuredlist` VALUES (1, '影史30部真正的“圣诞电影”', './public/upload/featuredlist/1.1.jpg', './public/upload/featuredlist/1.2.jpg', './public/upload/featuredlist/1.3.jpg', 'http://movie.mtime.com/list/1522.html');
INSERT INTO `featuredlist` VALUES (2, '《帝国》评最佳圣诞电影Top30', './public/upload/featuredlist/2.1.jpg', './public/upload/featuredlist/2.2.jpg', './public/upload/featuredlist/2.3.jpg', 'http://movie.mtime.com/list/72.html');
INSERT INTO `featuredlist` VALUES (3, 'indieWire2018年度13佳片', './public/upload/featuredlist/3.1.jpg', './public/upload/featuredlist/3.2.jpg', './public/upload/featuredlist/3.3.jpg', 'http://movie.mtime.com/list/1521.html');
INSERT INTO `featuredlist` VALUES (4, '美国电影学会2018年度十佳电影', './public/upload/featuredlist/4.1.jpg', './public/upload/featuredlist/4.2.jpg', './public/upload/featuredlist/4.3.jpg', 'http://movie.mtime.com/list/1520.html');

-- ----------------------------
-- Table structure for movie
-- ----------------------------
DROP TABLE IF EXISTS `movie`;
CREATE TABLE `movie`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `date` int(11) DEFAULT NULL,
  `performer` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '演员',
  `brief` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '简介',
  `images` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '图像',
  `typeid` int(11) DEFAULT NULL,
  `score` float(11, 1) DEFAULT 0.0,
  `state` int(11) DEFAULT NULL COMMENT '状态  1 正在上映 2 即将上映',
  `hot` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 98 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of movie
-- ----------------------------
INSERT INTO `movie` VALUES (47, '你好，之华', 2018, '周迅 / 秦昊 / 杜江 / 张子枫 / 邓恩熙 / 边天扬 / 吴彦姝 / 谭卓 / 胡歌 / 胡昌霖 / 李春明', '这是一个关于错过的故事。有人慌张地见面，有人简单地告别。姐姐袁之南离世的那个清晨，只匆匆留下一封信和一张同学会邀请函。 \n　　妹妹之华代替姐姐参加同学会，却意外遇见年少时的倾慕对象尹川。往日的记忆在苏醒，但再次相见，已物是人非。', './public/upload/1545787666.png', 3, 6.8, 2, 1);
INSERT INTO `movie` VALUES (48, '影', 2018, '邓超 / 孙俪 / 郑恺 / 王千源 / 王景春 / 胡军', '纷乱时局，群敌环伺。一个从小被秘密囚禁的替身，不甘只做他人手中的武器；但若想冲破枷锁，找回自我，又必将历经千难万险的考验；替身能否寻回自由，他又该如何选择？', './public/upload/1545787775.png', 2, 7.3, 1, 1);
INSERT INTO `movie` VALUES (43, '龙猫', 1988, '日高法子 / 坂本千夏 / 糸井重里 / 岛本须美 / 北林谷荣', '小月的母亲生病住院了，父亲带着她与四岁的妹妹小梅到乡间的居住。她们对那里的环境都感到十分新奇，也发现了很多有趣的事情。她们遇到了很多小精灵，她们来到属于她们的环境中，看到了她们世界中很多的奇怪事物，更与一只大大胖胖的龙猫成为了朋友。龙猫与小精灵们利用他们的神奇力量，为小月与妹妹带来了很多神奇的景观，令她们大开眼界。 \n　　妹妹小梅常常挂念生病中的母亲，嚷着要姐姐带着她去看母亲，但小月拒绝了。小梅竟然自己前往，不料途中迷路了，小月只好寻找她的龙猫及小精灵朋友们帮助。', './public/upload/1545211514.png', 7, 9.1, 1, 1);
INSERT INTO `movie` VALUES (49, '咏鹅', 2018, '朴海日 / 文素丽 / 郑镇荣 / 朴素丹', '允英喜欢前辈的妻子颂贤。允英知道颂贤离婚的事实后，两人冲动地一起去群山旅游。两人寄宿的民宿主人，一个中年男子，和患自闭症不出门的女儿一起生活。4个人在群山发生错综复杂的爱情。', './public/upload/1545787860.png', 3, 7.2, 1, 1);
INSERT INTO `movie` VALUES (44, '天空之城', 1986, '田中真弓 / 横泽启子 / 初井言荣 / 寺田农 / 常田富士男', '古老帝国拉比达是一座漂浮在空中的巨大的机器岛，传说那里已经无人居住，蕴藏着巨大的财富。因此，无论军方还是海盗，都在找寻着这座传说中的飞行岛。 \n　　矿工帕克这天偶遇拉达比继承人希达，两人一见如故。因为希达身上有找寻拉比达帝国的重要物件飞行石，军方和海盗两帮人马都在追杀希达。帕克带着希达一起逃亡，最终都没有逃出军方的手中，希达被军队掳走了。 \n　　为救朋友，帕克只能选择与海盗合作。帕克与海盗成功救出了希达，同时，他们也发现了军方的邪恶计划。为了阻止军方邪恶计划的实施，他们和海盗一起踏上了寻找拉比达之旅。', './public/upload/1545212026.png', 7, 9.0, 2, 1);
INSERT INTO `movie` VALUES (50, '塔巴德', 2018, '索姆·沙 / 田蒂·马舍 / 安妮塔·戴特 / 朗吉·查克拉博蒂 / 迪普克·达姆利', '20世纪初，印度有一条名叫Tumbbad的小村庄，Vinayak就住在村庄的郊外，他是村长不承认的私生子，痴迷于神话中一个祖传宝藏。他的曾祖母是一个被诅咒沉睡千年的女巫，Vinayak认为宝藏的秘密就藏在她身上。经过与曾祖母的对质，Vinayak最终直面宝藏的守护者邪恶的堕落之神。最初的几枚金币迅速升级变成一种不计后果，跨越几个世纪，永恒不灭的渴望，倘若Vinayak如愿以偿，这种渴望将变成一种会延续至下一代的魔咒。', './public/upload/1545787924.png', 8, 7.4, 1, 1);
INSERT INTO `movie` VALUES (51, '摄影机不要停', 2017, '滨津隆之 / 真鱼 / 主浜晴美 / 长屋和彰 / 细井学', '一部独立电影的剧组正在深山的废墟中拍摄一部僵尸电影, 谁知真的僵尸袭击了那里。 导演日暮大喜过望继续拍摄, 一镜到底记录下了剧组成员一个接一个成为僵尸.....', './public/upload/1545788044.png', 1, 8.4, 2, 1);
INSERT INTO `movie` VALUES (52, '找到你', 2018, '姚晨 / 马伊琍 / 袁文康 / 吴昊宸 / 王梓尘', '律师李捷（姚晨 饰）正在离婚进行时，与前夫争夺女儿抚养权，拼命工作为给孩子最好的生活，幸有保姆孙芳（马伊琍 饰）帮忙照顾孩子视如己出。 一日下班，李捷发现保姆孙芳和女儿毫无预兆地消失了，她内心最大的恐惧变成了现实。在追寻孙芳和女儿的下落时，她收到来自家人的谴责声讨，甚至遭到警方的怀疑。几乎崩溃的李捷，靠着惊人的勇气，踏上独自寻访的旅 程。在追踪过程中，李捷逐渐接近了另一个女人——保姆孙芳的人生故事，她的身份原先都是谎言，而真相也将浮出水面……', './public/upload/1545788199.png', 9, 7.4, 1, 1);
INSERT INTO `movie` VALUES (53, '李茶的姑妈', 2018, '黄才伦 / 艾伦 / 宋阳 / 卢靖姗 / 沈腾', '《李茶的姑妈》改编自开心麻花同名爆笑舞台剧。李茶（宋阳 饰）是个穷小子，姑妈（卢靖姗 饰）却是全球女首富，自打李茶出生后二人便未曾谋面。为了娶到“势利眼富商”的女儿，李茶恳请姑妈出面牵线搭桥，可各怀鬼胎的一行人却误将男员工黄沧海（黄才伦 饰）认作姑妈。为了各自的利益，黄沧海、李茶连同梁杰瑞（艾伦 饰）三个人将计就计组团来“假扮姑妈”，正当众人纷纷讨好这位“假姑妈”时，神秘的“真姑妈”现身了，一连串的爆笑故事也发生了......', './public/upload/1545788266.png', 1, 4.7, 1, 1);
INSERT INTO `movie` VALUES (54, '邪不压正', 2018, '彭于晏 / 廖凡 / 姜文 / 周韵 / 许晴', '七七事变前夕，华裔青年小亨德勒（彭于晏 饰）从美国远赴重洋，回到阔别十数年之久的北平从医。然而他真正的名字叫李天然，十三岁那年曾亲眼目睹师父一家遭师兄朱潜龙（廖凡 饰）和日本人根本一郎（泽田谦也 饰）灭门。侥幸逃生的天然被美国人亨德勒医生送往大洋彼岸，接受了极其严苛的训练，而今他怀着绝密的任务踏上故土。亨德勒父子租住神秘男子蓝青峰（姜文 饰）的宅子，蓝是当年辛亥革命的参与者，他与现为警察局长的朱潜龙过从甚密，却又以杀死李天然为筹码，暗中怂恿朱除掉根本一郎。复仇心切的李天然寻找到了仇人，而亨德勒医生则全力阻止养子冒险。在这一过程中，交际花唐凤仪（许晴 饰）与裁缝关巧红（周韵 饰）也卷入了男人的勾心斗角的漩涡里。直到七七事变爆发，所有的矛盾迎来了决断的时刻…… \n　　本片根据张北海的小说《侠隐》改编。', './public/upload/1545788330.png', 9, 7.0, 2, 1);
INSERT INTO `movie` VALUES (55, '神奇动物', 2018, '埃迪·雷德梅恩 / 凯瑟琳·沃特斯顿 / 约翰尼·德普 / 裘德·洛 / 埃兹拉·米勒', '虽然纽特（埃迪·雷德梅恩 Eddie Redmayne 饰）协助美国魔法部将邪恶的黑巫师格林德沃（约翰尼·德普 Johnny Depp 饰）捉拿归案，但最终格林德沃还是逃脱了禁锢，他来到了法国巴黎，一是为了集结信徒掀起革命，二十为了寻找同样藏匿在这里的克雷登斯（埃兹拉·米勒 Ezra Miller 饰），寄生在克雷登斯身上的默默然是帮助格林德沃实现野心的不可或缺的道具。 \n　　格林德沃的潜逃在整个魔法世界里都掀起了轩然大波，一时间草木皆兵。邓布利多（裘德·洛 Jude Law 饰）秘密的找到了纽特，希望他能够前往巴黎，先格林德沃一步找到克雷登斯。和纽特一起踏上巴黎之旅的，是麻鸡雅各布（丹·福格勒 Dan Fogler 饰），他此行的目的，是要找回先前因为吵架而来到巴黎投奔姐姐蒂娜（凯瑟琳·沃特森 Katherine Waterston 饰）的恋人奎妮（艾莉森·苏朵儿 Alison Sudol 饰）。', './public/upload/1545788432.png', 7, 7.2, 1, 1);
INSERT INTO `movie` VALUES (56, '一出好戏', 2018, '黄渤 / 舒淇 / 王宝强 / 张艺兴 / 于和伟', '马进欠下债务，与远房表弟小兴在底层社会摸爬滚打，习惯性的买彩票，企图一夜暴富，并迎娶自己的同事姗姗。一日，公司全体员工出海团建，途中，马进收到了彩票中头奖的信息，六千万！就在马进狂喜自己翻身的日子终于到来之际，一场突如其来的滔天巨浪打破了一切。苏醒过来的众人发现身处荒岛 ，丧失了一切与外界的联系……', './public/upload/1545788504.png', 9, 7.1, 1, 1);
INSERT INTO `movie` VALUES (57, '我不是药神', 2018, '徐峥 / 王传君 / 周一围 / 谭卓 / 章宇', '普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。不速之客吕受益（王传君 饰）的到来，让他开辟了一条去印度买药做“代购”的新事业，虽然困难重重，但他在这条“买药之路”上发现了商机，一发不可收拾地做起了治疗慢粒白血病的印度仿制药独家代理商。赚钱的同时，他也认识了几个病患及家属，为救女儿被迫做舞女的思慧（谭卓 饰）、说一口流利“神父腔”英语的刘牧师（杨新鸣 饰），以及脾气暴烈的“黄毛”（章宇 饰），几个人合伙做起了生意，利润倍增的同时也危机四伏。程勇昔日的小舅子曹警官（周一围 饰）奉命调查仿制药的源头，假药贩子张长林（王砚辉 饰）和瑞士正牌医药代表（李乃文 饰）也对其虎视眈眈，生意逐渐变成了一场关于救赎的拉锯战。 \n　　本片改编自慢粒白血病患者陆勇代购抗癌药的真实事迹。', './public/upload/1545788577.png', 1, 9.0, 1, 1);
INSERT INTO `movie` VALUES (58, '蚁人2', 2018, '保罗·路德 / 伊万杰琳·莉莉 / 迈克尔·佩纳 / 汉娜·乔恩-卡门 / 沃尔顿·戈金斯', '来自漫威电影宇宙的新片《蚁人2：黄蜂女现身》重点展现了两位超级英雄令人惊叹的收缩能力。继《美国队长3》的故事线之后，斯科特·朗迎来了自己作为超级英雄和孩子父亲的双重身份。一方面，他在背负着蚁人职责的同时努力过好自己的生活；另一方面，二代黄蜂女霍普·凡·戴恩和汉克·皮姆博士又向他传达了一项紧迫的新任务。斯科特必须再次穿上战衣，与黄蜂女并肩作战，共同破解来自过去的谜题。', './public/upload/1545788647.png', 2, 7.3, 2, 1);
INSERT INTO `movie` VALUES (59, '罗马', 2018, '雅利扎·阿巴里西奥 / 玛丽娜·德·塔维拉 / 迭戈·科蒂娜·奥特里 / 卡洛斯·佩拉尔塔 / 马科·格拉夫', '故事发生在墨西哥城的一个中产阶级社区“罗马”，讲述年轻女佣克里奥（雅利扎·阿巴里西奥饰）在雇主索菲亚（玛丽娜·德·塔维拉饰）家中工作，该家中索菲亚的丈夫长期在外，由女佣克里奥照顾索菲的四个孩子。突如其来的两个意外，同时砸中了女佣克里奥和雇主索菲亚，两人究竟该如何面对苦涩茫然的生活？四位孩子似乎是希望所在。 这是以导演阿方索·卡隆的儿时记忆铸成的影片，而卡隆其实就是片中某一位小孩。', './public/upload/1545807104.png', 9, 8.2, 1, 1);
INSERT INTO `movie` VALUES (60, '碟中谍6', 2018, '汤姆·克鲁斯 / 亨利·卡维尔 / 文·瑞姆斯 / 西蒙·佩吉 / 丽贝卡·弗格森', '伊森·亨特（汤姆·克鲁斯饰）和队友们接到了追回三个大杀伤性核武器的任务。眼见任务马上就能完成，但为了挽救其中一位队友卢瑟（文·瑞姆斯饰）的生命，三个核武器被人趁机带走。中情局负责人斯隆女士（安吉拉·贝塞特饰）调来她手下的得意猛将沃克（亨利·卡维尔饰），让他盯着伊森·亨特完成追回核武器的任务。期间，女特工伊尔莎（丽贝卡·弗格森饰）突然出现，伊森·亨特发现，他要面对的并不只是恐怖分子，还有潜藏在政府部门的内鬼。', './public/upload/1545807346.png', 2, 8.2, 2, 1);
INSERT INTO `movie` VALUES (61, '昨日青空', 2018, '苏尚卿 / 王一博 / 段艺璇 / 马斑马 / 慧明', '中国首部青春题材动画电影《昨日青空》将于2018年暑期全国上映。该片改编自口袋巧克力同名人气漫画作品，由咕咚导演奚超执导。影片以中国南方小镇兰溪为实际取景地，讲述了小镇上的几位高三学生，有关梦想、友谊、亲情和初恋等的成长经历，描绘出一段极具中国风、清新唯美的青春故事。', './public/upload/1545807501.png', 3, 6.1, 1, 1);
INSERT INTO `movie` VALUES (62, '大象席地而坐', 2018, '8.1', '满州里动物园有一头大象，每天坐在那里。为朋友出头的少年、为弟报仇的恶霸哥哥、身陷囹圄的女生，卡在世界灰暗的缝隙里无法脱身，却挣扎着去看大象。萧瑟寒冬的一天，绝望身影在不对称不平衡的影像中碰撞， 爆裂了压抑的沉郁，在粗糙布景、朦胧灯光的低成本制作中肆意蔓延。作者兼导演胡波 （笔名胡迁）首作，以青涩朴质与震撼感性，获柏林影展赏识入围论坛单元， 却是无法嵌合和谐主旋律的一块失落拼图。看不见大象是共同宿命，胡波骤然陨落，也成了这一代人的遗憾。', './public/upload/1545807589.png', 9, 8.1, 2, 1);
INSERT INTO `movie` VALUES (63, '胖子行动队', 2018, '文章 / 包贝尔 / 郭京飞 / 李成敏 / 辣目洋子', '特工“J”（文章 饰）在执行一次A级任务时头部中枪，导致颅内下丘脑受损。养伤期间，J渐渐变成了一个三百斤的大胖子，并患有严重的嗜睡症，但J依然认为自己是一个王牌特工。终于，J再次接到任务，只身前往日本取回机密文件。文件得手后，J却擅自拆开文件决定替组织继续完成隐藏其中的任务，不料却晕倒在居酒屋。医院醒来的J结识了保安郝英俊（包贝尔 饰），郝英俊为了证明自己不是个一事无成的废物毅然决然地加入任务中。这对临时拍档在执行任务的过程中，经历一次又一次令人啼笑皆非、险象环生的危机......', './public/upload/1545807685.png', 1, 4.1, 1, 1);
INSERT INTO `movie` VALUES (64, '一个小忙', 2018, '安娜·肯德里克 / 伊恩·霍 / 约书亚·萨坦 / 格伦达·布拉甘扎 / 安德鲁·兰内斯', '故事讲述一博主史蒂芬娜偶遇艾米丽，两人迅速成为好友，而当艾米丽请求史蒂芬娜帮助她接孩子时，艾米丽却突然消失了。一切似乎很不寻常。 本片根据达塞·贝尔同名小说改编。', './public/upload/1545807751.png', 9, 7.1, 2, 1);
INSERT INTO `movie` VALUES (65, '悲伤逆流成河', 2018, '赵英博 / 任敏 / 辛云来 / 章若楠 / 朱丹妮', '多组校园欺凌事件，打破了5位主角本应该美好的青春校园生活。齐铭（赵英博 饰）清俊帅气，是人人称颂的优等生，而易遥（任敏 饰）却是大家口中的“赔钱货”。两人一同长大，感情很好。而这一切，在转学生唐小米（朱丹妮 饰）出现之后发生了翻天覆地的变化。流言成了毁人利器，处处对易瑶进行刁难，易遥的生活开始陷入黑暗，遭受各类残酷欺凌。顾森西（辛云来 饰）教会易瑶对校园暴力进行反击，他的出现给了易遥一丝曙光。可阴差阳错，顾森湘（章若楠 饰）的意外却将她再度推入黑暗。当受害者变成施暴者，当看客变成助推，在这一场名为“玩笑”的闹剧中，没有旁观者，只有施暴者……', './public/upload/1545807825.png', 3, 5.8, 1, 0);
INSERT INTO `movie` VALUES (66, '巴斯特·斯克鲁格斯', 2018, '哈利·米尔林 / 佐伊·卡赞 / 连姆·尼森 / 詹姆斯·弗兰科 / 大卫·克鲁霍尔特兹', '《巴斯特·斯克鲁格斯的歌谣》（The Ballad Of Buster Scruggs）讲述一个喜欢唱歌跳舞的神枪手以一种无敌的姿态一路杀一路唱一路跳，但最终遇上了旗鼓相当的对手的故事。 \n　　《阿尔戈多内斯附近》（Near Algodones）讲述一位生活在高平原之上的流浪者因为自己一无所有虚度光阴而决定抢劫银行的故事。 \n　　《饭票》（Meal Ticket）讲述一个流动剧团的经理和一个没有四肢的残疾人“艺术家”之间的故事。 \n　　《黄金谷》（All Gold Canyon）讲述一名教授因发现一座金矿而欣喜若狂，又因为随即到来的邪恶侵占势力而面临险境的故事。 \n　　《受惊女子》（The Gal Who Got Rattled）讲述一名乘坐马车的女人需要两位俄勒冈小道的工头其中一人的帮助，并且将其当作潜在结婚对象加以考察的故事。', './public/upload/1545807858.png', 1, 8.4, 1, 1);
INSERT INTO `movie` VALUES (67, '动物世界', 2018, '李易峰 / 迈克尔·道格拉斯 / 周冬雨 / 曹炳琨 / 王戈', '在游戏机厅做着兼职“小丑”的郑开司（李易峰 饰），幼时父亲突然失踪，母亲重病住院，使得郑开司的生活非常拮据。发小“大虾米”（曹炳琨 饰）借口买房骗下了郑开司父亲留下的房产，还给他带来了巨额的欠债。神秘人物（迈克尔·道格拉斯 Michael Douglas 饰）出现，告诉郑开司，只要参加“命运号”游轮上的神秘游戏，就有机会偿还完所有欠款，一无所有的郑开司为了给青梅竹马的护士刘青（周冬雨 饰）和母亲更好的生活，只得登上游轮，开始了生存游戏，一场以“剪刀、石头、布”展开的生死较量即将登场', './public/upload/1545807917.png', 2, 7.3, 2, 0);
INSERT INTO `movie` VALUES (68, '柯南：零的执行人', 2018, '高山南 / 山口胜平 / 山崎和佳奈 / 小山力也 / 绪方贤一', '一场大规模的恐怖袭击，一个牵扯无数内幕的神秘组织，这个关乎整个东京的可怕计划即将拉开帷幕…首脑云集的东京峰会举办在即，会场突然发生超大规模的爆炸事件，不仅在现场发现行踪诡异的安室透，毛利小五郎更是惨遭陷害。面对最危险任务，最烧脑的推理，最艰难的博弈，柯南能否在迷雾中寻找到唯一的真相。', './public/upload/1545807975.png', 9, 5.8, 2, 0);
INSERT INTO `movie` VALUES (69, '江湖儿女', 2018, '赵涛 / 廖凡 / 徐峥 / 梁嘉艳 / 刁亦男', '故事开始于2001年的山西大同，巧巧（赵涛 饰）和斌斌（廖凡 饰）相恋多年，巧巧一心希望能够和斌斌成家过安稳的生活，但斌斌身为当地的大佬，有着自己更高远的志向。一场意外中，斌斌遭人暗算危在旦夕，巧巧拿着斌斌私藏的手枪挺身而出救了斌斌，自己却因为非法持枪而被判处了五年的监禁。 \n　　一晃眼五年过去，出狱后的巧巧发现整个世界都发生了翻天覆地的变化，唯一不变的是她对斌斌真挚的感情。巧巧跋山涉水寻找斌斌的下落，但此时的斌斌早已经失去了往日的锋芒，而且身边已有了新的女友。身无分文的巧巧靠着自己的智慧摸爬滚打，终于为自己挣得了一片天地。', './public/upload/1545808060.png', 3, 7.6, 1, 0);
INSERT INTO `movie` VALUES (70, '摘金奇缘', 2018, '吴恬敏 / 杨紫琼 / 亨利·戈尔丁 / 嘉玛·陈 / 奥卡菲娜', '《摘金奇缘》改编自新加坡作家关凯文畅销全球的小说《疯狂的亚洲富豪》，讲述了美国出生的华裔经济学教授朱瑞秋（吴恬敏 饰）与男友杨尼克（亨利·戈尔丁 饰）一起参加他的好友婚礼时，竟惊讶地发现男友原来是亚洲“钻石王老五”。惊魂未定的瑞秋不仅要面临尼克身边前赴后继的美女攻势，还要直面男友背后错综复杂的豪门恩怨，更有杨紫琼饰演的高傲富家婆婆进行百般阻挠。当朱瑞秋误入名车、派对、珠宝、豪宅萦绕的纸醉金迷的亚洲富豪世界，爱情突现阶级鸿沟，作为现代版“高知灰姑娘”，她能否打好这场爱情保卫战？', './public/upload/1545808136.png', 7, 6.2, 1, 0);
INSERT INTO `movie` VALUES (71, '宝贝儿', 2018, '杨幂 / 郭京飞 / 李鸿其', '《宝贝儿》是由侯孝贤监制、刘杰执导的纪实风格文艺片，讲述的是一个因为严重先天缺陷而被父母抛弃的弃儿江萌（杨幂 饰），拯救另一个被父母宣判了“死刑”的缺陷婴儿的故事。', './public/upload/1545808220.png', 9, 5.2, 1, 0);
INSERT INTO `movie` VALUES (72, '利兹与青鸟', 2018, '种崎敦美 / 东山奈央 / 本田望结 / 藤村鼓乃美 / 山冈百合', '就读北宇治高中的铠塚霙（种崎敦美 配音），在管乐团中负责吹奏双簧管；伞木希美（东山奈央 配音） 则负责吹奏长笛。国中时，希美主动对孤单的霙搭话，从那刻起霙就将希美视为自己的全世界。霙现在每天都感到很幸福，因为有希美在身边陪伴她，但同时也害怕希美是否会再次消失在自己面前…… \n　　身为高三生的两人，即将参加最后一次的音乐竞赛会，自选曲是〈莉兹与青鸟〉，这是一首以童话为蓝本所创作的曲子，为双簧管和长笛共演的独奏曲。「霙是莉兹，希美是青鸟」两人一边将自己的情感投射于童话故事中，一边练习曲子度过不安焦躁的每一天。总是不太契合的齿轮，为了寻求相合的瞬间，而不停地转动著……究竟霙是否能对希美坦露自己真正的烦恼呢？', './public/upload/1545808277.png', 9, 8.6, 1, 1);
INSERT INTO `movie` VALUES (73, '复仇者联盟3', 2018, '小罗伯特·唐尼 / 克里斯·海姆斯沃斯 / 克里斯·埃文斯 / 马克·鲁弗洛 / 乔什·布洛林', '最先与灭霸军团遭遇的雷神索尔一行遭遇惨烈打击，洛基遇害，空间宝石落入灭霸之手。未几，灭霸的先锋部队杀至地球，一番缠斗后掳走奇异博士。为阻止时间宝石落入敌手，斯塔克和蜘蛛侠闯入了敌人的飞船。与此同时，拥有心灵宝石的幻视也遭到外星侵略者的袭击，为此美国队长、黑寡妇等人将其带到瓦坎达王国，向黑豹求助。幸免于难的索尔与星爵一行相逢，随后他们兵分两路。索尔与火箭、格鲁特踏上再铸雷神之锤的旅程，星爵则与卡魔拉等人试图阻止灭霸的恶行。而知晓灵魂宝石下落的卡魔拉，同样是其义父灭霸追踪的对象。 \n　　攸关整个宇宙命运的史诗战役全面展开，超级英雄们为了平凡而自由的生命奋不顾身', './public/upload/1545808340.png', 4, 8.1, 1, 1);
INSERT INTO `movie` VALUES (74, '快把我哥带走', 2018, '张子枫 / 彭昱畅 / 赵今麦 / 孙泽源 / 方翔锐', '拥有一个每天耍贱整蛊妹妹、毫无家庭感的哥哥是一种什么感受？油炸还是蒸锅？时秒只希望哥哥时分彻底消失！连珍贵的生日愿望都是“快把我哥带走”。不料愿望成真，哥哥变成闺蜜妙妙的哥哥，时秒同情妙妙的同时心里暗爽摆脱“大魔王”！变成独生女的时秒感觉生活无限美好，但却发现时分除了整天和好基友甄开心、万岁插科打诨、整蛊妹妹妙妙之外，还隐藏着不为人知的秘密……', './public/upload/1545808399.png', 1, 6.9, 1, 0);
INSERT INTO `movie` VALUES (75, '巨齿鲨', 2018, '杰森·斯坦森 / 李冰冰 / 雷恩·威尔森 / 鲁比·罗丝 / 赵文瑄 /', '一项由中国主导的国际科研项目，正在马里亚纳海沟深处进行时，遭遇未知生物攻击，科研人员被困海底。前美国海军陆战队深海潜水专家乔纳斯·泰勒受命前往营救，再度遭遇数年前曾经在深海给自己留下终身难以磨灭记忆的史前生物巨齿鲨。乔纳斯联手科研项目中的中国女科学家张苏茵成功营救了被困人员，但营救行动却意外造成了巨齿鲨逃离深海。当史前巨兽重返浅海，人类将为自己对大自然的贪婪付出惨重的代价......', './public/upload/1545808481.png', 5, 5.8, 2, 0);
INSERT INTO `movie` VALUES (76, '一个明星的诞生', 2018, 'Lady Gaga / 布莱德利·库珀 / 山姆·艾里奥特 / 安德鲁·戴斯·克雷 / 拉菲·格拉沃恩', '在这个全新诠释的悲剧爱情故事中，乡村音乐家杰克·梅恩（布莱德利·库珀 饰）发掘了正在努力熬出头的服务员艾莉（Lady Gaga 饰），当时她正要放弃成为歌手的梦想时，杰克说动她进入演艺界，也在共事的过程中爱上她。不久艾莉的事业起飞，但杰克却克服不了他由来已久的心魔，使两人的关系开始崩裂…… \n　　本片是布莱德利·库珀生平第一次自编、自导、自演，并担任制片，挑战从来没有尝试过的现场演唱与音乐创作的电影。也是Lady Gaga首次挑战大银幕。其在影片中演唱的这些歌曲是由她跟布莱德利·库珀，还有几位艺人一起创作的。所有音乐都是原创和现场录音。', './public/upload/1545808535.png', 9, 7.2, 1, 0);
INSERT INTO `movie` VALUES (77, '燃烧', 2018, '刘亚仁 / 史蒂文·元 / 全钟瑞 / 金秀京 / 崔承浩', '目标成为作家的青年李钟秀（刘亚仁 饰），平日里靠兼职养活自己。经营畜牧业的父亲不谙人情，官司缠身，迫使钟秀又要为了搭救父亲而四处奔走。这一日，钟秀在某大型卖场重逢了当年的同学申惠美（全钟淑 饰）。惠美计划近期前往非洲旅行，于是拜托钟秀照看爱猫Boil。不久后惠美回国，与之一同下飞机的还有名叫本（史蒂文·元 饰）的男子。本驾驶保时捷，居住在高级公寓内，优哉游哉，不见工作，四处玩乐，和钟秀相比有如天上地下。不知为何，本走入平民钟秀和惠美的生活，更向新朋友讲述了他奇特的癖好。在钟秀家小聚的那个晚上过后，惠美仿佛人间蒸发了一般无影无踪…… \n　　本片根据村上春树的短篇小说《烧仓房》改编。', './public/upload/1545808589.png', 6, 7.9, 2, 0);
INSERT INTO `movie` VALUES (78, '解除好友：暗网', 2018, '科林·伍德尔 / 斯蒂芬妮·诺格拉斯 / 瑞贝卡·瑞滕豪斯 / 安德鲁斯·李斯 / 贝蒂·加布里埃尔', '马迪亚斯（科林·伍德尔 Colin Woodell 饰）的女友阿玛雅（斯蒂芬妮·诺格拉斯 Stephanie Nogueras 饰）是一名聋哑人，为了能够和阿玛雅顺利的交流，马迪亚斯煞费苦心，然而两人之间的关系却还是每况愈下，这让马迪亚斯的内心有着隐隐的不安。 \n　　一天，马迪亚斯在一家咖啡店里捡到了一台笔记本电脑，鬼使神差之下，马迪亚斯将电脑带回了家，通过电脑里保存的用户名和密码，马迪亚斯登录了电脑主人的个人主页，发现这似乎是一个不学无术的花花公子。马迪亚斯通过这台电脑和好友莎伦娜（瑞贝卡·瑞滕豪斯 Rebecca Rittenhouse 饰）、达蒙（安德鲁斯·李斯 Andrew Lees 饰）、娜丽（贝蒂·加布里埃尔 Betty Gabriel 饰）等人联机视频，随着时间的推移，他们渐渐发现了隐藏在这台电脑里的可怕的秘密。', './public/upload/1545808657.png', 6, 7.9, 1, 0);
INSERT INTO `movie` VALUES (79, '精灵旅社3', 2018, '亚当·桑德勒 / 凯瑟琳·哈恩 / 史蒂夫·布西密 / 赛琳娜·戈麦斯 / 阿什·布林克夫', '德古拉和家人朋友们踏上了一艘邮轮，宿命之敌“吸血鬼猎人”范海辛正在船上布置天罗地网等待“猎物”上门。除了爆笑搞怪，这次的冒险更加惊险刺激而纠结，因为在茫茫大海中，德古拉除了要面对重重家庭阻力、拯救朋友们的压力、也许还有......一个美女?', './public/upload/1545808708.png', 1, 6.7, 1, 0);
INSERT INTO `movie` VALUES (80, '此房是我造', 2018, '马特·狄龙 / 布鲁诺·甘茨 / 乌玛·瑟曼 / 希芳·法隆 / 苏菲·格拉宝', '1970年代，美国。导演通过长达12年的时间跨度，通过多件谋杀案展示了Jack这位高智商连环杀手的心路演变。全片围绕Jack的视角展开。在他眼中，他的每次谋杀都堪称一件艺术作品。随着警察的调查迫近，他每次犯案都要承受越来越大的风险，以打造出自己心目中的终极艺术品。通过与一位名叫Verge的陌生人的反复对话，我们得以逐渐了解Jack对谋杀的艺术性诠释，这是一种残酷与高雅的交融，一种近乎孩童的自我怜悯，也是他精神变态的缘由。《The House That Jack Built》以一种哲学式的，有时乃至诙谐的叙述手法讲述了一段阴郁残虐的故事。', './public/upload/1545808770.png', 8, 7.6, 1, 0);
INSERT INTO `movie` VALUES (81, '狄仁杰之四大天王', 2018, '赵又廷 / 冯绍峰 / 林更新 / 阮经天 / 马思纯 /', '狄仁杰（赵又廷 饰）大破神都龙王案后，高宗（盛鉴 饰）御赐神器亢龙锏，遭天后武则天（刘嘉玲 饰）嫉妒，天后为盗取亢龙锏陷害狄仁杰，召集了一帮会方术的“异人组”图谋不轨，并命令尉迟真金（冯绍峰 饰）带队。狄仁杰在医官沙陀忠（林更新 饰）的帮助下成功摆脱“异人组”迫害，并和尉迟真金商议和解，与此同时“异人组”刺客水月（马思纯 饰）却发现都城出现不明势力，在狄仁杰周旋于武则天的埋伏时，大唐陷入更深的危机，“封魔族”携异术登场，一场“屠魔”大战即将爆发……', './public/upload/1545808842.png', 2, 6.1, 2, 0);
INSERT INTO `movie` VALUES (82, '幸福的拉扎罗', 2018, '阿德里亚诺·塔尔迪奥洛 / 阿涅塞·格拉齐亚尼 / 卢卡·奇科瓦尼 / 阿尔巴·罗尔瓦赫尔 / 塞尔希·洛佩斯', '拉扎罗（阿德里亚诺·塔尔迪奥洛 饰）是一位内心单纯的年轻农民，坦克雷迪（卢卡·奇科瓦尼 饰）则是一位骄横的年轻贵族。他在Inviolata这座与世隔绝的小城内生活，这个城镇则由侯爵夫人阿诺西纳·德·卢娜（尼可莱塔·布拉斯基 饰）所统治。年轻的农民和年轻的贵族相遇并成为好友。某天，坦克雷迪出于玩乐的目的，自导自演了绑架闹剧，并向拉扎罗求助。拉扎罗非常珍视这段真诚且快乐的友谊，他决定穿越时空，回到小城，以寻找坦克雷迪。', './public/upload/1545808963.png', 11, 8.7, 1, 1);
INSERT INTO `movie` VALUES (83, '超人总动员2', 2018, '格雷格·T·尼尔森 / 霍利·亨特 / 莎拉·沃威尔 / 赫克·米尔纳 / 伊莱·富西尔', '超人家族时隔14年强势回归！这次站在聚光灯下的是弹力女超人海伦（霍利·亨特 配音），超能先生巴鲍勃（格雷格·T·尼尔森 配音）则在家照料巴小倩和巴小飞，过起了“正常人”的居家生活。这一角色转换对于每个家庭成员来说都是艰难的，更何况他们都还没意识到宝宝巴小杰的超能力已经悄然增长。当剧中新反派开始酝酿一个狡诈危险的阴谋，超人家族必须联合酷冰侠（塞缪尔·杰克逊 配音）的力量团结对外——然而即使各自都有超能力，真正做起来却是知易行难。', './public/upload/1545809008.png', 1, 7.9, 1, 1);
INSERT INTO `movie` VALUES (84, '摩天营救', 2018, '道恩·强森 / 内芙·坎贝尔 / 黄经汉 / 罗兰·默勒 / 麦肯纳·罗伯茨 /', '在香港市中心，世界上最高、结构最复杂的摩天大楼遭到破坏，危机一触即发。威尔·索耶（道恩·强森 饰）的妻子萨拉（内芙·坎贝尔 饰）和孩子们在98层被劫为人质，直接暴露在火线上。威尔，这位战争英雄、前联邦调查局救援队员，作为大楼的安保顾问，却被诬陷纵火和谋杀。他必须奋力营救家人，为自己洗脱罪名，关乎生死存亡的高空任务就此展开。', './public/upload/1545809079.png', 2, 6.3, 2, 1);
INSERT INTO `movie` VALUES (85, '铁血战士', 2018, '波伊德·霍布鲁克 / 崔凡特·罗兹 / 雅各布·特伦布莱 / 科甘-迈克尔·凯 / 奥立薇娅·玛恩', '一艘宇宙飞船坠落地球，正在执行军事任务的狙击手奎因·麦肯纳（波伊德·霍布鲁克 饰演）恰好遭遇外星人并发生激战，侥幸逃脱的他捡到了外星人的装备并寄回了家想再做他用。传说这种被称为铁血战士的外星人曾数次光临地球，使用各种残忍的手段对人类进行猎杀游戏。而这一次，奎因的儿子罗里 收到包裹后意外触发机关，引来了更强大的终极铁血战士降临地球。而想要阻止其大开杀戒的却是一群问题士兵和一位生物科学家凯茜·布拉克（奥立薇娅·玛恩 饰演）。事情却远不像他们想象的那样简单，一场铁血、终极铁血与人类之间的三方猎杀大战正式拉响！', './public/upload/1545809134.png', 5, 5.0, 1, 1);
INSERT INTO `movie` VALUES (86, '反贪风暴3', 2018, '古天乐 / 张智霖 / 郑嘉颖 / 邓丽欣 / 栢天男 /', 'ICAC (廉政公署) 陆志廉（古天乐 饰），JFIU (联合财富情报组) 刘保强（张智霖 饰）分别侦查贪污及洗黑钱案，但苦无线索，这时廉政公署L组 (内部纪律调查组) 程德明（郑嘉颖 饰）收到Eva（邓丽欣 饰）举报，指陆志廉收贿1,200万，陆无法辩解即时停职。 \n　　刘发现陆被诬陷，并跟一直调查的洗黑钱案有着千丝万缕关系，同时怀疑银行主任游子新（栢天男 饰）协助犯罪集团首脑王海禾（谭耀文 饰）洗黑钱；中国反贪局侦查处处长洪亮（丁海峰 饰）来港，给刘保强提供了重要情报，原来洗黑钱案牵涉内地贪腐官员，陆港合力打击贪腐；陆亦冒险搜集罪证却遭禁锢，命悬一线......', './public/upload/1545809190.png', 6, 5.6, 1, 1);
INSERT INTO `movie` VALUES (87, '特工', 2018, '黄政民 / 李星民 / 赵震雄 / 朱智勋', '1990年代中期，暗号「黑金星」的南韩「国家安全企划部」情报员，假扮成南韩商人跟北韩进行商业交易，藉此渗透北韩军事单位，打探核开发情报，他得在最危险的地方，赢得敌方的信任，没想到一心只想完成任务的他，却在不自觉中陷入南北韩权力高层间的恐怖阴谋。', './public/upload/1545809250.png', 10, 8.4, 1, 1);
INSERT INTO `movie` VALUES (88, '头号玩家', 2018, '泰伊·谢里丹 / 奥利维亚·库克 / 本·门德尔森 / 马克·里朗斯 / 丽娜·维特', '故事发生在2045年，虚拟现实技术已经渗透到了人类生活的每一个角落。詹姆斯哈利迪（马克·里朗斯 Mark Rylance 饰）一手建造了名为“绿洲”的虚拟现实游戏世界，临终前，他宣布自己在游戏中设置了一个彩蛋，找到这枚彩蛋的人即可成为绿洲的继承人。要找到这枚彩蛋，必须先获得三把钥匙，而寻找钥匙的线索就隐藏在詹姆斯的过往之中。 \n　　韦德（泰尔·谢里丹 Tye Sheridan 饰）、艾奇（丽娜·维特 Lena Waithe 饰）、大东（森崎温 饰）和修（赵家正 饰）是游戏中的好友，和之后遇见的阿尔忒弥斯（奥利维亚·库克 Olivia Cooke 饰）一起，五人踏上了寻找彩蛋的征程。他们所要对抗的，是名为诺兰索伦托（本·门德尔森 Ben Mendelsohn 饰）的大资本家。', './public/upload/1545809302.png', 5, 8.7, 1, 1);
INSERT INTO `movie` VALUES (89, '蜘蛛侠：平行宇宙', 2018, '沙梅克·摩尔 / 杰克·约翰逊 / 海莉·斯坦菲尔德 / 马赫沙拉·阿里 / 布莱恩·泰里·亨利', '迈尔斯（沙梅克·摩尔 配音）的父亲是一位一板一眼的警官，而他的母亲则是一名工作勤奋的护士。慈爱的父母对于孩子的成就非常自豪，也希望他能够融入新加入的这所优秀的学校，在这里取得成功。然而迈尔斯的生活因为一次意外变得更加复杂。他被一只放射性蜘蛛咬伤，并因此获得了毒液冲击、伪装隐藏、蜘蛛爬行、超凡听力、蜘蛛感应等一系列超能力。与此同时，这座城市里最臭名昭着的犯罪头目金并（列维·施瑞博尔 配音）已经建立起一台高度隐秘的超级对撞机，这台对撞机开启了通往其他宇宙的时空通道，来自其他宇宙、不同版本的蜘蛛侠（包括中年彼得·帕克、女蜘蛛侠格温、暗影蜘蛛侠、蜘猪侠和潘妮·帕克）也来到了迈尔斯所在的世界。在这些新老角色的帮助下，迈尔斯慢慢学习、逐渐接受挑战，也学会了作为一名超级英雄所要承担的责任。他最终意识到，任何人都可以戴上超级英雄的面具，为正义而战……', './public/upload/1545916866.png', 2, 8.8, 1, 1);
INSERT INTO `movie` VALUES (90, '叶问外传：张天志', 2018, '张晋 / 戴夫·巴蒂斯塔 / 柳岩 / 杨紫琼 / 托尼·贾', '作为《叶问》系列影片，电影《叶问外传：张天志》延续了《叶问3》的故事，讲述了同为咏春传人的张天志在比武惜败叶问后，决意放下功夫、远离江湖纷争，但面对接踵而至的连番挑衅，面对家国大义遭受的恶意侵犯，决定重拾咏春惩戒毒贩、“以武之道”捍卫民族道义尊严的故事。', './public/upload/1545917151.png', 2, 5.8, 1, 1);
INSERT INTO `movie` VALUES (92, '憨豆特工3', 2018, '罗温·艾金森 / 本·米勒 / 欧嘉·柯瑞兰寇 / 杰克·莱西 / 艾玛·汤普森', '《憨豆特工3》是憨豆特工系列喜剧的第三部作品，罗温·艾金森再度回归，继续扮演大受欢迎的阴差阳错入行的特工强尼。这次的新冒险由一场黑客攻击拉开序幕，所有在职的特工都被暴露了身份，使得强尼成为情报处最后的救命稻草。因此获得“返聘”的强尼第一个出勤任务便是要找出这位超强 黑客 。木头木脑、技能堪忧的强尼将如何应对现代科技的挑战，成功完成任务呢？', './public/upload/1545917492.png', 1, 6.5, 1, 1);
INSERT INTO `movie` VALUES (94, '碟中谍6：全面瓦解', 2018, '汤姆·克鲁斯 / 亨利·卡维尔 / 文·瑞姆斯 / 西蒙·佩吉 / 丽贝卡·弗格森', '伊森·亨特（汤姆·克鲁斯饰）和队友们接到了追回三个大杀伤性核武器的任务。眼见任务马上就能完成，但为了挽救其中一位队友卢瑟（文·瑞姆斯饰）的生命，三个核武器被人趁机带走。中情局负责人斯隆女士（安吉拉·贝塞特饰）调来她手下的得意猛将沃克（亨利·卡维尔饰），让他盯着伊森·亨特完成追回核武器的任务。期间，女特工伊尔莎（丽贝卡·弗格森饰）突然出现，伊森·亨特发现，他要面对的并不只是恐怖分子，还有潜藏在政府部门的内鬼。', './public/upload/1545917914.png', 2, 8.1, 1, 1);
INSERT INTO `movie` VALUES (95, '红海行动', 2018, '张译 / 黄景瑜 / 海清 / 杜江 / 蒋璐霞', '中东国家伊维亚共和国发生政变，武装冲突不断升级。刚刚在索马里执行完解救人质任务的海军护卫舰临沂号，受命前往伊维亚执行撤侨任务。舰长高云（张涵予 饰）派出杨锐（张译 饰）率领的蛟龙突击队登陆战区，护送华侨安全撤离。谁知恐怖组织扎卡却将撤侨部队逼入交火区，一场激烈的战斗在所难免。与此同时，法籍华人记者夏楠（海清 饰）正在伊维亚追查威廉·柏森博士贩卖核原料的事实，而扎卡则突袭柏森博士所在的公司，意图抢走核原料。混战中，一名隶属柏森博士公司的中国员工成为人质。为了解救该人质，八名蛟龙队员必须潜入有150名恐怖分子的聚集点，他们用自己的信念和鲜血铸成中国军人顽强不屈的丰碑！ \n　　本片根据也门撤侨事件改编。', './public/upload/1545918029.png', 2, 8.3, 1, 1);
INSERT INTO `movie` VALUES (97, '印度暴徒', 2018, '阿米尔·汗 / 卡特莉娜·卡芙 / 阿米达普·巴强 / 劳埃德·欧文 / 阿明·阿卜杜勒·奎德', '故事的背景是在1795年东印度公司殖民统治印度期间，殖民统治者想要抓住反抗组织”阿扎德“的领袖（阿米特巴·巴强饰演）于是找来了混混弗朗基（阿米尔·汗饰演）充当间谍，但弗朗基在潜伏过程中却有了另外的想法，一段充满了意料之外的动作冒险故事由此展开.....', './public/upload/1546001337.png', 2, 6.8, 1, 0);

-- ----------------------------
-- Table structure for popularmoviereview
-- ----------------------------
DROP TABLE IF EXISTS `popularmoviereview`;
CREATE TABLE `popularmoviereview`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `myurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `point` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `headimage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `movie` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `movieUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `css` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `type` varchar(1) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of popularmoviereview
-- ----------------------------
INSERT INTO `popularmoviereview` VALUES (1, '泡沫冲刷的1971年夏天', 'evenc伊文西', 'http://my.mtime.com/8707036', './public/upload/popularmoviereview/c1.jpg', '8.7', '这不是那个大名鼎鼎的意大利罗马，只是墨西哥城一个中产阶级社区的名字。故事源自导演的真实经历，他就是那四个孩子的其中之一。', './public/upload/popularmoviereview/t1.jpg', '《罗马》', 'http://movie.mtime.com/236568/', 'http://i.mtime.com/even2even/blog/8067194/', '<dd style=\"opacity:1;z-index:2;\" data-opacity=\"1\" data-pan=\"M17_Index_Commu_Com_First\">', '1');
INSERT INTO `popularmoviereview` VALUES (2, '我也想赶紧结束这糟糕的电影', '1994阿将', 'http://my.mtime.com/4182697', './public/upload/popularmoviereview/c2.jpg', '3.0', '或许，《天气预爆》的最大成功之处在于，它间接地向人们解释了，中国电影的雾霾也如电影中城市的雾霾一样，只有神仙才能解救。', './public/upload/popularmoviereview/t2.jpg', '《天气预爆》', 'http://movie.mtime.com/260450/', 'http://i.mtime.com/qixiaojiang/blog/8067203/', '<dd data-opacity=\"0\" data-pan=\"M17_Index_Commu_Com_First\">', '1');
INSERT INTO `popularmoviereview` VALUES (3, '迪士尼让一让！年度最佳动画来了！', 'evenc伊文西', 'http://my.mtime.com/8707036', './public/upload/popularmoviereview/c3.jpg', '8.9', '与我们所熟悉的任何一部电影不一样，《平行宇宙》是全新的动画电影，更前卫的创作理念，更前卫的美学风格，更前卫的视听语言！', './public/upload/popularmoviereview/t3.jpg', '《蜘蛛侠：平行宇宙》', 'http://movie.mtime.com/228745/', 'http://i.mtime.com/even2even/blog/8067138/', '<dd data-opacity=\"0\" data-pan=\"M17_Index_Commu_Com_First\">', '1');
INSERT INTO `popularmoviereview` VALUES (4, NULL, '晓走', 'http://my.mtime.com/3224412', './public/upload/popularmoviereview/c4.jpg', '9.0', '每个小人物，都有自己的故事，有自己在乎的人和事，有自己的心——只是，你知不知道，想不想知道而已。', NULL, '无名之辈', 'http://movie.mtime.com/250056', 'http://i.mtime.com/shuicao80/blog/8067293/', NULL, '0');
INSERT INTO `popularmoviereview` VALUES (5, NULL, '妙介子', 'http://my.mtime.com/841339', './public/upload/popularmoviereview/c5.jpg', '7.0', '在隐喻下，影片没有将主要精力放在表现种族歧视上，而是用一种特别特别黄暴的方式表现这场侦探欢喜闹剧。', NULL, '欢乐时光谋杀案', 'http://movie.mtime.com/97724', 'http://i.mtime.com/miaojiezi/blog/8067267/', NULL, '0');
INSERT INTO `popularmoviereview` VALUES (6, NULL, 'lovefaye2002', 'http://my.mtime.com/2433988', './public/upload/popularmoviereview/c6.jpg', '9.0', '阿方索·卡隆不愧为长镜头大师，生活的真实性是无法用割裂的镜头来雕刻的，而长镜头更容易使影片的情感得以升华。', NULL, '罗马', 'http://movie.mtime.com/236568/', 'http://i.mtime.com/lovefaye2002/blog/8069700/', NULL, '0');

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES (1, '喜剧');
INSERT INTO `type` VALUES (2, '动作');
INSERT INTO `type` VALUES (3, '爱情');
INSERT INTO `type` VALUES (5, '科幻');
INSERT INTO `type` VALUES (6, '犯罪');
INSERT INTO `type` VALUES (7, '冒险');
INSERT INTO `type` VALUES (8, '惊悚');
INSERT INTO `type` VALUES (9, '剧情');
INSERT INTO `type` VALUES (10, '悬疑');
INSERT INTO `type` VALUES (11, '奇幻');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userType` enum('manager','user') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'user',
  `userName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `headurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (5, 'user', 'xupin', '14e1b600b1fd579f47433b88e8d85291', '../public/upload/head/default_head.png');
INSERT INTO `user` VALUES (6, 'user', 'Assam', '14e1b600b1fd579f47433b88e8d85291', '../public/upload/head/111.png');
INSERT INTO `user` VALUES (7, 'user', 'XieSenyu', '14e1b600b1fd579f47433b88e8d85291', '../public/upload/head/default_head.png');
INSERT INTO `user` VALUES (8, 'user', 'test', '14e1b600b1fd579f47433b88e8d85291', '../public/upload/head/default_head.png');
INSERT INTO `user` VALUES (9, 'manager', 'admin', 'c3284d0f94606de1fd2af172aba15bf3', '../public/upload/head/666.png');
INSERT INTO `user` VALUES (10, 'manager', 'apple', 'ae6d32585ecc4d33cb8cd68a047d8434', '../public/upload/head/default_head.png');
INSERT INTO `user` VALUES (11, 'user', 'FuLeqi', '14e1b600b1fd579f47433b88e8d85291', '../public/upload/head/default_head.png');
INSERT INTO `user` VALUES (17, 'manager', 'pear', '3c93c20cb53994772692daf746dc86c0', '../public/upload/head/default_head.png');

SET FOREIGN_KEY_CHECKS = 1;

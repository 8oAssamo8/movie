<?php
include_once ("database.php");
get_connection();
$featuredlistSQL = "select * from featuredlist order by id desc limit 4 ";
$featuredlistResult_set = mysql_query($featuredlistSQL);

$InlandSQL = "select * from boxoffice where type='Inland'  order by boxOffice desc limit 3";
$InlandSQL_set = mysql_query($InlandSQL);
$NorthAmericaSQL = "select * from boxoffice where type='NorthAmerica'  order by boxOffice desc limit 3 ";
$NorthAmericaSQL_set = mysql_query($NorthAmericaSQL);
$GlobalSQL = "select * from boxoffice where type='Global'  order by boxOffice desc limit 3 ";
$GlobalSQL_set = mysql_query($GlobalSQL);

$PopularMovieReviewSQL = "select * from PopularMovieReview where type='1' order by id desc limit 3 ";
$PopularMovieReview_set = mysql_query($PopularMovieReviewSQL);
$MovieReviewSQL = "select * from PopularMovieReview where type='0' order by id desc limit 3";
$MovieReview_set = mysql_query($MovieReviewSQL);
close_connection();
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>更多</title>
<script>
  var api_server = "api.data.channel.inc-mtime.com"
    , extra_api_server = "web.channel.mtime.com"
    , css_server = "static1.mtime.cn/nodewww"
    , js_server = "static1.mtime.cn/nodewww"
    , img_server = "img31.mtime.cn"
    , server = "www.mtime.com"
    , site_domain = ".mtime.com"
    , site_domain_cn = ".mtime.cn"
    , site_server = "www.mtime.com"
    , rev = "/20180901153114"
    , MT = "M17";
</script>
<link rel="stylesheet" href="./public/more/public.css">
<link rel="stylesheet" href="./public/more/index.css">
<script src="./public/more/common-index.js"></script>
</head>
<body pn=M17_Index>
	<div class="indexstruct fix movielist" data-plugin="imgLoad">
		<div class="mlist">
			<div class="fix">
				<a href="http://movie.mtime.com/all/list/" class="titmore"
					target="_blank" data-pan="M17_Index_Rank_List_More">更多 <i
					class="gt"></i></a>
				<h4>特色榜单</h4>
			</div>
			<div>
				<ul>
          <?php
        if (mysql_num_rows($featuredlistResult_set) > 0) {
            while ($featured = mysql_fetch_array($featuredlistResult_set)) {
                ?>
            <li>
						<dl class="mlistpic fix">
							<dt>
								<a href="<?php echo $featured['url']?>" target="_blank"
									data-pan="M17_Index_Rank_List_1"><img src=""
									data-src="<?php echo $featured['image1']?>" width="280"
									height="200" alt="<?php echo $featured['title']?>" /></a>
							</dt>
							<dd>
								<a href="<?php echo $featured['url']?>" target="_blank"
									data-pan="M17_Index_Rank_List_1"><img src=""
									data-src="<?php echo $featured['image2']?>" width="138"
									height="99" alt="<?php echo $featured['title']?>" /></a>
							</dd>
							<dd>
								<a href="<?php echo $featured['url']?>" target="_blank"
									data-pan="M17_Index_Rank_List_1"><img src=""
									data-src="<?php echo $featured['image3']?>" width="138"
									height="99" alt="<?php echo $featured['title']?>" /><span></span><strong><i>30</i>部电影
										&gt;</strong></a>
							</dd>
						</dl>
						<h3>
							<a href="<?php echo $featured['url']?>" target="_blank"
								data-pan="M17_Index_Rank_List_1"><?php echo $featured['title']?></a>
						</h3>
					</li>
            <?php
            }
        }
        ?>
          </ul>
			</div>
		</div>
		<div class="mboxoffice" id="rank-list" data-plugin="imgLoad">
			<h4>电影票房</h4>
			<dl class="mboxofficetab fix" data-plugin="tab-nav">
				<dd class="cur">
					<span>内地</span>
				</dd>
				<dd>
					<span>北美</span>
				</dd>
				<dd>
					<span>全球</span>
				</dd>
			</dl>
			<div data-plugin="tab-box">
				<div class="boxofficelist" style="display: block;">
					<ul>
            <?php
            if (mysql_num_rows($InlandSQL_set) > 0) {
                $i = 1;
                while ($InlandSQL = mysql_fetch_array($InlandSQL_set)) {
                    ?>
            <li class="fix">
							<dl class="mboxofficerank">
								<dt><?php echo '0'.$i; $i++ ?></dt>
								<dd class="moviepic">
									<a href="<?php echo $InlandSQL['url']?>" target="_blank"
										title="<?php echo $InlandSQL['title']?>"
										data-pan="M17_Index_Rank_rank_1_1"><img src=""
										data-src="<?php echo $InlandSQL['image']?>" width="80"
										height="120" alt="<?php echo $InlandSQL['title']?>" /></a>
								</dd>
								<dd class="text">
									<h3>
										<a href="<?php echo $InlandSQL['url']?>" target="_blank"
											data-pan="M17_Index_Rank_rank_1_1"><?php echo $InlandSQL['title'] ?></a>
									</h3>
									<p>日票房：<?php echo $InlandSQL['boxOffice']?>万</p>
									<p>累计：<?php echo $InlandSQL['allBoxOffice']?>亿</p>
									<p>单位：元</p>
								</dd>
							</dl>
						</li>
              <?php
                }
            }
            ?>
            </ul>
					<p class="tr">
						<a href="http://movie.mtime.com/boxoffice/#CN/daily"
							target="_blank" data-pan="M17_Index_Rank_rank_1_More">更多 <i
							class="gt"></i></a>
					</p>
				</div>
				<div class="boxofficelist" style="display: none;">
					<ul>
            <?php
            if (mysql_num_rows($NorthAmericaSQL_set) > 0) {
                $i = 1;
                while ($NorthAmericaSQL = mysql_fetch_array($NorthAmericaSQL_set)) {
                    ?>
            <li class="fix">
							<dl class="mboxofficerank">
								<dt><?php echo '0'.$i; $i++ ?></dt>
								<dd class="moviepic">
									<a href="<?php echo $NorthAmericaSQL['url'] ?>" target="_blank"
										title="<?php echo $NorthAmericaSQL['title'] ?>"
										data-pan="M17_Index_Rank_rank_2_1"><img src=""
										data-src="<?php echo $NorthAmericaSQL['image'] ?>" width="80"
										height="120" alt="<?php echo $NorthAmericaSQL['title'] ?>" /></a>
								</dd>
								<dd class="text">
									<h3>
										<a href="<?php echo $NorthAmericaSQL['url'] ?>"
											target="_blank" data-pan="M17_Index_Rank_rank_2_1"><?php echo $NorthAmericaSQL['title'] ?></a>
									</h3>
									<p>周末票房：<?php echo $NorthAmericaSQL['boxOffice'] ?>万</p>
									<p>累计：<?php echo $NorthAmericaSQL['allBoxOffice'] ?>亿</p>
									<p>单位：美元</p>
								</dd>
							</dl>
						</li>
            <?php
                }
            }
            ?>
            </ul>
					<p class="tr">
						<a href="http://movie.mtime.com/boxoffice/#US/weekend"
							target="_blank" data-pan="M17_Index_Rank_rank_2_More">更多 <i
							class="gt"></i></a>
					</p>
				</div>
				<div class="boxofficelist" style="display: none;">
					<ul>
            <?php
            if (mysql_num_rows($GlobalSQL_set) > 0) {
                $i = 1;
                while ($GlobalSQL = mysql_fetch_array($GlobalSQL_set)) {
                    ?>
            <li class="fix">
							<dl class="mboxofficerank">
								<dt><?php echo '0'.$i; $i++ ?></dt>
								<dd class="moviepic">
									<a href="<?php echo $GlobalSQL['url'] ?>" target="_blank"
										title="<?php echo $GlobalSQL['title'] ?>"
										data-pan="M17_Index_Rank_rank_2_1"><img src=""
										data-src="<?php echo $GlobalSQL['image'] ?>" width="80"
										height="120" alt="<?php echo $GlobalSQL['title'] ?>" /></a>
								</dd>
								<dd class="text">
									<h3>
										<a href="<?php echo $GlobalSQL['url'] ?>" target="_blank"
											data-pan="M17_Index_Rank_rank_2_1"><?php echo $GlobalSQL['title'] ?></a>
									</h3>
									<p>周末票房：<?php echo $GlobalSQL['boxOffice'] ?>万</p>
									<p>累计：<?php echo $GlobalSQL['allBoxOffice'] ?>亿</p>
									<p>单位：美元</p>
								</dd>
							</dl>
						</li>
            <?php
                }
            }
            ?>
            </ul>
					<p class="tr">
						<a href="http://movie.mtime.com/boxoffice/#world/weekend"
							target="_blank" data-pan="M17_Index_Rank_rank_3_More">更多 <i
							class="gt"></i></a>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="indexstruct fix" data-plugin="imgLoad">
		<div class="hotcomments structleft">
			<div class="fix">
				<a href="http://www.mtime.com/community/" class="titmore"
					target="_blank" data-pan="M17_Index_Commu_Com_More">更多 <i
					class="gt"></i></a>
				<h4 class="indextitle">热门影评</h4>
			</div>
			<div class="fix commbox">
				<div class="headslider maincom" id="commentsTop"
					data-ride="carousel">
					<dl>
            <?php
            $num = 1;
            if (mysql_num_rows($PopularMovieReview_set) > 0) {
                while ($review = mysql_fetch_array($PopularMovieReview_set)) {
                    if ($num == 1)
                        echo "<dd style='opacity:1;z-index:2;' data-opacity='1' data-pan='M17_Index_Commu_Com_First'>";
                    else
                        echo "<dd data-opacity='0' data-pan='M17_Index_Commu_Com_First'>";
                    $num ++;
                    ?>
                  <a href="<?php echo $review['url'] ?>" target="_blank"
							class="hotcomimg" title="<?php echo $review['title'] ?>"
							data-pan="M17_Index_Commu_Com_First"><img src=""
							data-src="<?php echo $review['image'] ?>" width="450"
							height="260" alt="<?php echo $review['title']?>" /></a>
						<div class="commentsbox">
							<div class="commentsuser">
								<a class="hotcomimg" href="<?php echo $review['myurl'] ?>"
									target="_blank" title="<?php echo $review['name'] ?>"
									data-pan="M17_Index_Commu_Com_First"><img src=""
									data-src="<?php echo $review['headimage'] ?>" width="63"
									height="63" alt="<?php echo $review['name'] ?>" /></a>
								<p>
									<a href="<?php echo $review['myurl'] ?>" target="_blank"
										data-pan="M17_Index_Commu_Com_First"><?php echo $review['name'] ?></a><span>评</span><span><a
										href="<?php echo $review['movieUrl'] ?>" target="_blank"><?php echo $review['movie'] ?></a></span><i
										class="moviegrade"><?php echo $review['point'] ?></i>
								</p>
							</div>
							<h3>
								<a href="<?php echo $review['url'] ?>" target="_blank"
									data-pan="M17_Index_Commu_Com_First"><?php echo $review['title'] ?></a>
							</h3>
							<p class="describe">
								<i></i><?php echo $review['content'] ?></p>
						</div>
						</dd>
            <?php
                }
            }
            ?>
            </dl>
					<div class="sliderdot" data-slidedot="dot">
						<i data-target="#commentsTop" data-slide-to="0" class="cur"></i><i
							data-target="#commentsTop" data-slide-to="1" class=""></i><i
							data-target="#commentsTop" data-slide-to="2" class=""></i>
					</div>
				</div>
				<div class="sidercom">
					<ul>
            <?php
            if (mysql_num_rows($MovieReview_set) > 0) {
                while ($review2 = mysql_fetch_array($MovieReview_set)) {
                    ?>
            <li class="commentsmod"><a
							href="<?php echo $review2['movieUrl'] ?>" target="_blank"
							title="<?php echo $review2['title'] ?>"
							data-pan="M17_Index_Commu_Com_1"><img src=""
								data-src="<?php echo $review2['image'] ?>"
								alt="<?php echo $review2['movie'] ?>" width="80" height="120" /></a><a
							href="<?php echo $review2['url'] ?>" target="_blank"
							class="describe" data-pan="M17_Index_Commu_Com_1"><i></i><?php echo $review2['content'] ?></a>
							<p class="describemovie">
								<a href="<?php echo $review2['myurl'] ?>" target="_blank"
									data-pan="M17_Index_Commu_Com_1"><?php echo $review2['name'] ?></a>
								评 《<a href="<?php echo $review2['movieUrl'] ?>" target="_blank"
									data-pan="M17_Index_Commu_Com_1"><?php echo $review2['movie'] ?></a>》<i
									class="moviegrade"><?php echo $review2['point'] ?></i>
							</p></li>
              <?php
                }
            }
            ?>
            </ul>
				</div>
			</div>
		</div>
		<div class="community structright">
			<h4 class="indextitle tc">社区活动</h4>
			<div class="actlist" id="community-acts" data-ride="carousel">
				<div class="actdot" data-slidedot="dot" style="z-index: 5;"></div>
				<dl>
					<dd data-opacity="1"
						style="z-index: 3; opacity: 1; filter: alpha(opacity = 100);">
						<p target="_blank" class="actpic" title="IMAX3D《大黄蜂》上海超前点映"
							data-pan="M17_Index_Commu_Commu_Img_1">
							<img src=""
								data-src="http://img5.mtime.cn/mg/2018/12/26/102102.77915160.jpg"
								width="303" height="210" alt="IMAX3D《大黄蜂》上海超前点映" />
						</p>
						<div class="actcont">
							<h3>
								<p target="_blank" data-pan="M17_Index_Commu_Commu_Til_1">IMAX3D《大黄蜂》上海超前点映</p>
							</h3>
							<p class="acttime">
								<i></i>2019年5月20日 13:14
							</p>
							<p href="javascript: ;" class="actadd" target="self">
								<i></i>东莞 东莞理工学院
							</p>
							<p class="actinfo">想拥有全年IMAX影票？【IMAX“不同凡响”影迷会】东莞站将于东莞理工学院大礼堂举办！</p>
							<p class="actbtn">
								<a href="http://group.mtime.com/shfilm/event/47217/"
									target="_blank" data-pan="M17_Index_Commu_Commu_Btn_1">我参加</a>
							</p>
						</div>
					</dd>
				</dl>
			</div>
		</div>
	</div>
	</div>
	</div>
	</div>
	<script type="text/javascript">
       var indexTGs = {"ad-normal-hot":"<div class=\"tc  mb15\" style=\"cursor:pointer;\">\n<iframe  src=\"http://static1.mtime.cn/tg/16/2016_index_news_banner_1200x90.html\" width=\"1200\" height=\"90\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>\n</div>\n\n","ad-normal-mall":"","ad-normal-recommend":"<div class=\"tc  mb15\" style=\"cursor:pointer;\">\n<iframe  src=\"http://static1.mtime.cn/tg/2011/2016_index_mtimejx_banner_1200x90.html\" width=\"1200\" height=\"90\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>\n</div>\n","ad-normal-funny":"<div class=\"tc  mb15\" style=\"cursor:pointer;\">\n<iframe  src=\"http://static1.mtime.cn/tg/16/2016_index_global_banner_1200x90.html\" width=\"1200\" height=\"90\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>\n</div>","ad-normal-ft":"<div class=\"tc  mb15\" style=\"padding-bottom:15px;\">\n<iframe  src=\"http://static1.mtime.cn/tg/2011/2016_index_footer_banner_1200x90.html.html\" width=\"1200\" height=\"90\" frameborder=\"0\" border=\"0\" marginwidth=\"0\" marginheight=\"0\" scrolling=\"no\" allowtransparency=\"true\"></iframe>\n</div>\n"};
    </script>
	<script src="./public/more/index.js"></script>
	<div style="display: none"></div>
	<script type="text/javascript"></script>
</body>
</html>
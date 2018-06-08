<template>
  <div class="ibody">
    <header>
      <h1>如影随形</h1>
      <h2>影子是一个会撒谎的精灵，它在虚空中流浪和等待被发现之间;在存在与不存在之间....</h2>
      <div class="logo"><a href="/"></a></div>
      <nav id="topnav"><router-link to="/page/home" id="current">首页</router-link><router-link to="/page/about">关于我</router-link><router-link to="/page/newList">慢生活</router-link><router-link to="/page/share">模板分享</router-link><router-link to="/page/theme">模板主题</router-link></nav>
    </header>
    <article>
      <div class="banner">
        <ul class="texts">
          <p>The best life is use of willing attitude, a happy-go-lucky life. </p>
          <p>最好的生活是用心甘情愿的态度，过随遇而安的生活。</p>
        </ul>
      </div>
      <div class="bloglist">
        <h2>
          <p><span>推荐</span>文章</p>
        </h2>
        <div class="blogs">
          <h3><a href="/">犯错了怎么办？</a></h3>
          <figure><img src="../assets/lib/home/images/01.jpg" ></figure>
          <ul>
            <p>看到昔日好友发了一篇日志《咎由自取》他说他是一个悲观者，感觉社会抛弃了他，脾气、性格在6年的时间里变化很大，很难适应这个社会。人生其实就是不断犯错的过程，在这个过程中不断的犯错，不断的吸取教训，不断的成长。也许日子里的惊涛骇浪，不过是人生中的水花摇晃，别用显微镜放大你的悲伤。</p>
            <span class="readmore" @click="readMore($event)">阅读全文&gt;&gt;</span>
          </ul>
          <p class="autor"><span>作者：方晴</span><span>分类：【<a href="/">日记</a>】</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></p>
          <div class="dateview">2014-04-08</div>
        </div>
        <div class="blogs">
          <h3><a href="/">个人博客模板（2014草根寻梦）</a></h3>
          <figure><img src="../assets/lib/home/images/02.jpg" ></figure>
          <ul>
            <p>2014第一版《草根寻梦》个人博客模板简单、优雅、稳重、大气、低调。专为年轻有志向却又低调的草根站长设计。模板采用html5+css3设计，nav导航实现鼠标悬停渐变显示英文标题的效果。banner部分，选择大图作为背景，利用css3中animation属性结合文字图片实现文字从左到右的渐变效果</p>
            <span class="readmore" @click="readMore($event)">阅读全文&gt;&gt;</span>
          </ul>
          <p class="autor"><span>作者：方晴</span><span>分类：【<a href="/">个人博客模板</a>】</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></p>
          <div class="dateview">2014-02-19</div>
        </div>
        <div class="blogs">
          <h3><a href="/">我的个人博客之――阿里云空间选择</a></h3>
          <figure><img src="../assets/lib/home/images/03.png" ></figure>
          <ul>
            <p>之前服务器放在电信机房， 联通用户访问速度很不稳定，经常出现访问速度慢的问题，换到阿里云解决了之前的问题。很多人都问我的博客选得什么空间，一年的费用得多少钱，今天我列个表出来，供大家参考。</p>
            <span class="readmore" @click="readMore($event)">阅读全文&gt;&gt;</span>
          </ul>
          <p class="autor"><span>作者：方晴</span><span>分类：【<a href="/">网站建设</a>】</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></p>
          <div class="dateview">2014-01-18</div>
        </div>
        <div class="blogs">
          <h3><a href="/">从摄影作品中获取网页颜色搭配技巧</a></h3>
          <figure><img src="../assets/lib/home/images/04.jpg" ></figure>
          <ul>
            <p>作为一个优秀、专业的网页设计师，首先要了解各种颜色的象征，以及不同类型网站常用的色彩搭配。色彩搭配看似复杂,但并不神秘。一般来说,网页的背景色应该柔和一些、素一些、淡一些,再配上深色的文字,使人看起来自然、舒畅。色彩是人的视觉最敏感的东西。主页的色彩处理得好，可以锦上添花，达到事半功倍的效果。</p>
            <span class="readmore" @click="readMore($event)">阅读全文&gt;&gt;</span>
          </ul>
          <p class="autor"><span>作者：方晴</span><span>分类：【<a href="/">心得笔记</a>】</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></p>
          <div class="dateview">2014-01-09</div>
        </div>
        <div class="blogs">
          <h3><a href="/">css3制作的一个魔方</a></h3>
          <figure><img src="../assets/lib/home/images/04.png" ></figure>
          <ul>
            <p>本应用由CSS3代码实现，无图片和flash，请使用Chrome等webkit内核浏览器或Firefox打开。破解攻略和大家分享下：首先，破解魔方，我们就要先了解它的结构，魔方共6色6面，每面又分为中央块（最中间的块6个）、角块（4角的块8个）和边块（4条边中间的块12个）...
            </p>
            <span class="readmore" @click="readMore($event)">阅读全文&gt;&gt;</span>
          </ul>
          <p class="autor"><span>作者：方晴</span><span>分类：【<a href="/">css3</a>】</span><span>浏览（<a href="/">459</a>）</span><span>评论（<a href="/">30</a>）</span></p>
          <div class="dateview">2013-09-05</div>
        </div>
      </div>
    </article>
    <aside>
      <div class="avatar"><router-link to="/page/about"><span>关于方晴</span></router-link></div>
      <div class="topspaceinfo">
        <h1>执子之手，与子偕老</h1>
        <p>于千万人之中，我遇见了我所遇见的人....</p>
      </div>
      <div class="about_c">
        <p>网名：DanceSmile | 即步非烟</p>
        <p>职业：Web前端设计师、网页设计 </p>
        <p>籍贯：福建省―厦门市</p>
        <p>电话：13662012345</p>
        <p>邮箱：fangqiing@163.com</p>
      </div>
      <div class="bdsharebuttonbox"><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a><a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_more" data-cmd="more"></a></div>
      <div class="tj_news">
        <h2>
          <p class="tj_t1">最新文章</p>
        </h2>
        <ul>
          <li><a href="/">犯错了怎么办？</a></li>
          <li><a href="/">两只蜗牛艰难又浪漫的一吻</a></li>
          <li><a href="/">春暖花开-走走停停-发现美</a></li>
          <li><a href="/">琰智国际-Nativ for Life官方网站</a></li>
          <li><a href="/">个人博客模板（2014草根寻梦）</a></li>
          <li><a href="/">简单手工纸玫瑰</a></li>
          <li><a href="/">响应式个人博客模板（蓝色清新）</a></li>
          <li><a href="/">蓝色政府（卫生计划生育局）网站</a></li>
        </ul>
        <h2>
          <p class="tj_t2">推荐文章</p>
        </h2>
        <ul>
          <li><a href="/">犯错了怎么办？</a></li>
          <li><a href="/">两只蜗牛艰难又浪漫的一吻</a></li>
          <li><a href="/">春暖花开-走走停停-发现美</a></li>
          <li><a href="/">琰智国际-Nativ for Life官方网站</a></li>
          <li><a href="/">个人博客模板（2014草根寻梦）</a></li>
          <li><a href="/">简单手工纸玫瑰</a></li>
          <li><a href="/">响应式个人博客模板（蓝色清新）</a></li>
          <li><a href="/">蓝色政府（卫生计划生育局）网站</a></li>
        </ul>
      </div>
      <div class="links">
        <h2>
          <p>友情链接</p>
        </h2>
        <ul>
          <li><a href="/">方晴个人博客</a></li>
          <li><a href="/">3DST技术社区</a></li>
        </ul>
      </div>
      <div class="copyright">
        <ul>
          <p> Design by <a href="/">DanceSmile</a></p>
          <p>闽ICP备11002373号-1</p>
        </ul>
      </div>
    </aside>
    <div class="clear"></div>
    <!-- 清除浮动 -->
  </div>
</template>

<script>
  import '../assets/lib/home/css/base.css'
  import '../assets/lib/home/css/index.css'
  import '../assets/lib/home/css/media.css'
    export default {
        name: 'Home',
      methods:{
        readMore:function ($event) {
        console.log($event);
          layer.open({
            type: 1
            ,title: $($event.target).parent().siblings('h3').text()//不显示标题栏
            ,closeBtn: false
            ,area: '600px;'
            ,shade: 0.8
            ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
            ,btn: ['返回']
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: $($event.target).siblings().text()
            ,success: function(){
            }
          });
        }
      }

    }
</script>

<style>
html,body{
  background: none;
}
</style>

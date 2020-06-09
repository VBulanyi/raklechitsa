<template>
  <div class="share">
    <nxt-title>Поделитесь</nxt-title>
    <div class="share__icons">
      <fb :url="facebookUrl" />
      <inst :url="instagramUrl" />
      <odnokl :url="odnoklassniki" />
      <twitter :url="twitter" />
      <vk :url="vkUrl" />
      <ytb :url="youtubeUrl" />
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import FacebookLogo from '@/components/ui/FacebookLogo';
import InstagramLogo from '@/components/ui/InstagramLogo';
import OdnoklassnikiLogo from '@/components/ui/OdnoklassnikiLogo';
import TwitterLogo from '@/components/ui/TwitterLogo';
import VkontakteLogo from '@/components/ui/VkontakteLogo';
import YouTubeLogo from '@/components/ui/YouTubeLogo';

export default {
  components: {
    'nxt-title': Title,
    fb: FacebookLogo,
    inst: InstagramLogo,
    odnokl: OdnoklassnikiLogo,
    twitter: TwitterLogo,
    vk: VkontakteLogo,
    ytb: YouTubeLogo,
  },
  data() {
    return {
      instagramUrl: 'https://www.instagram.com/raklechitsa/',
      youtubeUrl:
        'https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F',
      facebookUrl: `https://www.facebook.com/sharer.php?src=sp&u=${encodeURI(
        window.location.href
      )}&title=${document.querySelector('title').innerText}`,
      vkUrl: `https://vk.com/share.php?url=${encodeURI(
        window.location.href
      )}&title=${document.querySelector('title').innerText}`,
      odnoklassniki: `https://connect.ok.ru/offer?url=${encodeURI(
        window.location.href
      )}&amp;title=${document.querySelector('title').innerText}`,
      twitter: `https://twitter.com/intent/tweet?text=${
        document.querySelector('title').innerText
      }&url=${encodeURI(window.location.href)}`,
    };
  },
};
</script>

<style scoped>
.share {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.share__icons {
  display: flex;
  margin-bottom: 50px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  width: 35%;
}

@media screen and (max-width: 768px) {
  .share__icons {
    width: 100%;
  }
}
</style>

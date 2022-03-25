/**
 * 98p-1
 */

const Nightmare = require('nightmare')
const vo = require('vo')
const nightmare = Nightmare({
    show: true
})
const BASE_URL = `https://grafolio.naver.com/category/painting`
const GRAFOLIO_URL = `${BASE_URL}#category_popular_creator`

function* run() {
    yield nightmare.goto(GRAFOLIO_URL)
    let prevHeight, currHeight = 0
    while (prevHeight !== currHeight) {
        prevHeight = currHeight
        currHeight = yield nightmare.evaluate(() => document.body.scrollHeight)
        yield nightmare.scrollTo(currHeight, 0).wait(3000)
    }
    const a = yield nightmare
    .evaluate(() => Array.from(document.querySelectorAll('a.thumb'))
    .map(e => (`https://grafolio.naver.com${e.getAttribute('href')}`)))
    console.log(a)
    yield nightmare.end()
}
vo(run)(() => console.log('스크래핑이 완료되었습니다.'))
/*
[
  'https://grafolio.naver.com/korea385',
  'https://grafolio.naver.com/sumckjang',
  'https://grafolio.naver.com/27x398',
  'https://grafolio.naver.com/nuguna_art',
  'https://grafolio.naver.com/minhwaholic',
  'https://grafolio.naver.com/designer_jd_',
  'https://grafolio.naver.com/moongallery',
  'https://grafolio.naver.com/daisy38317',
  'https://grafolio.naver.com/lch7074',
  'https://grafolio.naver.com/rmasca',
  'https://grafolio.naver.com/almighty80',
  'https://grafolio.naver.com/v1tr7u',
  'https://grafolio.naver.com/dmsdlek987',
  'https://grafolio.naver.com/psalm',
  'https://grafolio.naver.com/hosan62',
  'https://grafolio.naver.com/e2hj52',
  'https://grafolio.naver.com/gamsa7878',
  'https://grafolio.naver.com/5bz4je',
  'https://grafolio.naver.com/zse23w',
  'https://grafolio.naver.com/isitgrace',
  'https://grafolio.naver.com/hlv74c',
  'https://grafolio.naver.com/n5p4qe',
  'https://grafolio.naver.com/geurimkeem',
  'https://grafolio.naver.com/bluemore2001',
  'https://grafolio.naver.com/kkani23',
  'https://grafolio.naver.com/bcjby6',
  'https://grafolio.naver.com/feysnow',
  'https://grafolio.naver.com/crion09',
  'https://grafolio.naver.com/museumofart',
  'https://grafolio.naver.com/siwon001118',
  'https://grafolio.naver.com/chaehwastory',
  'https://grafolio.naver.com/artist_soyun',
  'https://grafolio.naver.com/hachu',
  'https://grafolio.naver.com/hnpek',
  'https://grafolio.naver.com/ngbsx1',
  'https://grafolio.naver.com/wjdgml79',
  'https://grafolio.naver.com/ruleeworld',
  'https://grafolio.naver.com/hantouch',
  'https://grafolio.naver.com/leeyoonjung',
  'https://grafolio.naver.com/rlaghdud489',
  'https://grafolio.naver.com/sonu_mk2',
  'https://grafolio.naver.com/graydeer24',
  'https://grafolio.naver.com/jemin',
  'https://grafolio.naver.com/leejh0720',
  'https://grafolio.naver.com/wjscvn',
  'https://grafolio.naver.com/forest7080',
  'https://grafolio.naver.com/sbc0702',
  'https://grafolio.naver.com/espoir2494',
  'https://grafolio.naver.com/rigole',
  'https://grafolio.naver.com/ssuny'
]
스크래핑이 완료되었습니다.
*/
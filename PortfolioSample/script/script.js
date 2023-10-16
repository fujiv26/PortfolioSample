// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // console.log(entry.target);
            entry.target.animate(
                {
                    opacity: [0, 1],
                    // filter: ['blur(.4rem)', 'blur(0)'],
                    translate: ['0 4rem', 0],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            // 一度表示したら監視をやめる
            obs.unobserve(entry.target);
        }
    });
};

// 監視設定
const fadeObs = new IntersectionObserver(animateFade);

// .fadeinを監視するよう指示
const fadeElments = document.querySelectorAll('.fadein');
fadeElments.forEach((fadeElment) => {
    fadeObs.observe(fadeElment);
});
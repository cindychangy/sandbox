import styles from './animations.module.scss'

export default function AnimationPage() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.kibana}>
          <p className={styles.logo}>
          <svg width="103" height="35" viewBox="0 0 103 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_219_1119)">
            <path d="M35.1336 18.339C35.1336 15.3988 33.3072 12.815 30.56 11.8201C30.6788 11.1964 30.7382 10.5728 30.7382 9.93424C30.7382 4.45482 26.2834 0 20.8188 0C17.6114 0 14.6415 1.52949 12.7705 4.11328C11.8498 3.40051 10.7213 3.01443 9.54815 3.01443C6.63767 3.01443 4.27662 5.37548 4.27662 8.28596C4.27662 8.92448 4.39542 9.54816 4.60331 10.1273C1.87102 11.1073 0 13.7357 0 16.661C0 19.616 1.84132 22.1998 4.58846 23.1947C4.46966 23.8036 4.41027 24.4421 4.41027 25.0806C4.41027 30.5452 8.85023 34.9852 14.3148 34.9852C17.5223 34.9852 20.4921 33.4408 22.3483 30.857C23.269 31.5846 24.3975 31.9856 25.5706 31.9856C28.4811 31.9856 30.8422 29.6245 30.8422 26.714C30.8422 26.0755 30.7234 25.4518 30.5155 24.8727C33.2478 23.8927 35.1336 21.2643 35.1336 18.339Z" fill="white"/>
            <path d="M13.8096 15.0721L21.5016 18.5766L29.253 11.7755C29.3718 11.2113 29.4163 10.6618 29.4163 10.0679C29.4163 5.28635 25.5258 1.39581 20.7443 1.39581C17.8783 1.39581 15.2203 2.8065 13.6017 5.16756L12.3098 11.8646L13.8096 15.0721Z" fill="#111B36"/>
            <path d="M5.85084 23.2096C5.73205 23.7738 5.6875 24.353 5.6875 24.9469C5.6875 29.7433 9.59289 33.6338 14.3892 33.6338C17.27 33.6338 19.9578 32.2083 21.5764 29.8324L22.8534 23.165L21.1457 19.8981L13.424 16.3788L5.85084 23.2096Z" fill="#111B36"/>
            <path d="M5.80578 9.90454L11.0773 11.1519L12.2356 5.16758C11.5228 4.61816 10.6318 4.32117 9.71117 4.32117C7.42437 4.32117 5.55334 6.17734 5.55334 8.47899C5.55334 8.96902 5.64244 9.45906 5.80578 9.90454Z" fill="#111B36"/>
            <path d="M5.34617 11.1667C2.99997 11.9389 1.35168 14.196 1.35168 16.6759C1.35168 19.0963 2.85147 21.2495 5.09373 22.1107L12.4887 15.4285L11.1374 12.5329L5.34617 11.1667Z" fill="#111B36"/>
            <path d="M22.9128 29.8324C23.6405 30.3819 24.5166 30.6937 25.4224 30.6937C27.7092 30.6937 29.5802 28.8375 29.5802 26.5359C29.5802 26.031 29.4911 25.541 29.3278 25.0955L24.0711 23.863L22.9128 29.8324Z" fill="#111B36"/>
            <path d="M23.9815 22.482L29.7728 23.8333C32.1338 23.0611 33.7673 20.804 33.7673 18.3093C33.7673 15.9037 32.2675 13.7357 30.0252 12.8893L22.452 19.527L23.9815 22.482Z" fill="#111B36"/>
            <path d="M49.122 24.5757L49.8199 24.5014L49.8645 25.927C48.0231 26.1794 46.4491 26.313 45.1423 26.313C43.405 26.313 42.1725 25.8082 41.4448 24.7984C40.7172 23.7886 40.3608 22.2146 40.3608 20.0911C40.3608 15.8442 42.0537 13.7208 45.4245 13.7208C47.0579 13.7208 48.2756 14.1811 49.0774 15.0869C49.8793 15.9927 50.2802 17.4331 50.2802 19.3784L50.1763 20.7594H42.1873C42.1873 22.0958 42.4249 23.0907 42.9149 23.7292C43.405 24.3678 44.2365 24.6945 45.4393 24.6945C46.657 24.7242 47.8746 24.6796 49.122 24.5757ZM48.4686 19.3338C48.4686 17.8489 48.231 16.7946 47.7558 16.1858C47.2807 15.5769 46.5085 15.2651 45.4393 15.2651C44.3702 15.2651 43.5535 15.5918 43.0189 16.2303C42.4843 16.8688 42.2022 17.9083 42.1873 19.3338H48.4686Z" fill="white"/>
            <path d="M52.8048 26.0904V8.71661H54.6164V26.0904H52.8048Z" fill="white"/>
            <path d="M66.0652 17.641V23.5957C66.0652 24.2045 67.565 24.3233 67.565 24.3233L67.4759 25.927C66.1988 25.927 65.1445 26.031 64.506 25.4221C63.0507 26.0606 61.6103 26.3279 60.1551 26.3279C59.0414 26.3279 58.195 26.0161 57.6159 25.3776C57.0367 24.7539 56.7397 23.8481 56.7397 22.6601C56.7397 21.487 57.0367 20.6109 57.6307 20.0615C58.2247 19.5121 59.1602 19.1557 60.4372 19.0369L64.2387 18.6805V17.641C64.2387 16.8243 64.0605 16.2304 63.7041 15.874C63.3477 15.5176 62.8577 15.3394 62.2489 15.3394H57.4822V13.7357H62.1301C63.4962 13.7357 64.4911 14.0475 65.1148 14.686C65.7533 15.3097 66.0652 16.3046 66.0652 17.641ZM58.6108 22.571C58.6108 24.056 59.2196 24.7985 60.4521 24.7985C61.5509 24.7985 62.635 24.6203 63.6893 24.249L64.2387 24.056V20.0615L60.66 20.403C59.9324 20.4624 59.4126 20.6703 59.0859 21.0267C58.7593 21.3831 58.6108 21.9028 58.6108 22.571Z" fill="white"/>
            <path d="M73.1484 15.3543C71.3962 15.3543 70.5052 15.9631 70.5052 17.1956C70.5052 17.7599 70.7131 18.1608 71.1141 18.3984C71.515 18.636 72.4357 18.8736 73.8761 19.126C75.3165 19.3785 76.3262 19.72 76.9202 20.1803C77.5142 20.6258 77.8112 21.4722 77.8112 22.7196C77.8112 23.9669 77.4102 24.8727 76.6084 25.4519C75.8065 26.031 74.6482 26.328 73.1039 26.328C72.109 26.328 68.7679 25.9567 68.7679 25.9567L68.8718 24.3827C70.7874 24.5609 72.1832 24.7094 73.1187 24.7094C74.0543 24.7094 74.767 24.5609 75.2571 24.2639C75.7471 23.9669 75.9995 23.462 75.9995 22.7641C75.9995 22.0662 75.7917 21.591 75.3759 21.3386C74.9601 21.0861 74.0394 20.8486 72.6139 20.6258C71.1883 20.4031 70.1786 20.0764 69.5846 19.6309C68.9906 19.2003 68.6936 18.3836 68.6936 17.2105C68.6936 16.0374 69.1094 15.1612 69.941 14.597C70.7725 14.0327 71.812 13.7505 73.0445 13.7505C74.0246 13.7505 77.4399 14.003 77.4399 14.003V15.5919C75.6432 15.4879 74.1731 15.3543 73.1484 15.3543Z" fill="white"/>
            <path d="M86.5716 15.5621H82.7256V21.3534C82.7256 22.7344 82.8295 23.6551 83.0226 24.0857C83.2305 24.5163 83.7057 24.7391 84.463 24.7391L86.6161 24.5906L86.7349 26.0904C85.6509 26.2685 84.8342 26.3576 84.2699 26.3576C83.0077 26.3576 82.1465 26.0458 81.6564 25.437C81.1664 24.8281 80.9288 23.6551 80.9288 21.9325V15.5621H79.2063V13.9881H80.9288V10.2758H82.7256V13.9733H86.5716V15.5621Z" fill="white"/>
            <path d="M89.0963 11.241V9.14728H90.9079V11.2559L89.0963 11.241ZM89.0963 26.0904V13.9882H90.9079V26.0904H89.0963Z" fill="white"/>
            <path d="M98.7779 13.7357C99.3125 13.7357 100.218 13.8396 101.495 14.0326L102.074 14.1069L102 15.577C100.708 15.4285 99.758 15.3542 99.1491 15.3542C97.783 15.3542 96.8475 15.6809 96.3575 16.3343C95.8674 16.9877 95.615 18.2053 95.615 19.9724C95.615 21.7395 95.8377 22.972 96.2981 23.6699C96.7584 24.3678 97.7088 24.7094 99.164 24.7094L102.015 24.4866L102.089 25.9864C100.59 26.2091 99.461 26.3279 98.7185 26.3279C96.8326 26.3279 95.5259 25.8379 94.8131 24.8727C94.1004 23.9075 93.7291 22.2741 93.7291 19.9724C93.7291 17.6707 94.1152 16.0522 94.8874 15.1315C95.6744 14.2108 96.9663 13.7357 98.7779 13.7357Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_219_1119">
            <rect width="102.09" height="35" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </p>
          <hr className={styles.hr} />
          <p className={styles.kibanaTitle}>
            Trained Models
          </p>
          <p>
            <svg width="50" height="35" viewBox="0 0 103 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_219_1104)">
<path d="M35.1336 18.339C35.1336 15.3988 33.3072 12.815 30.56 11.8201C30.6788 11.1964 30.7382 10.5728 30.7382 9.93424C30.7382 4.45482 26.2834 0 20.8188 0C17.6114 0 14.6415 1.52949 12.7705 4.11328C11.8498 3.40051 10.7213 3.01443 9.54815 3.01443C6.63767 3.01443 4.27662 5.37548 4.27662 8.28596C4.27662 8.92448 4.39542 9.54816 4.60331 10.1273C1.87102 11.1073 0 13.7357 0 16.661C0 19.616 1.84132 22.1998 4.58846 23.1947C4.46966 23.8036 4.41027 24.4421 4.41027 25.0806C4.41027 30.5452 8.85023 34.9852 14.3148 34.9852C17.5223 34.9852 20.4921 33.4408 22.3483 30.857C23.269 31.5846 24.3975 31.9856 25.5706 31.9856C28.4811 31.9856 30.8422 29.6245 30.8422 26.714C30.8422 26.0755 30.7234 25.4518 30.5155 24.8727C33.2478 23.8927 35.1336 21.2643 35.1336 18.339Z" fill="white"/>
<path d="M13.8096 15.0721L21.5016 18.5766L29.253 11.7755C29.3718 11.2113 29.4163 10.6618 29.4163 10.0679C29.4163 5.28635 25.5258 1.39581 20.7443 1.39581C17.8783 1.39581 15.2203 2.8065 13.6017 5.16756L12.3098 11.8646L13.8096 15.0721Z" fill="#FED10A"/>
<path d="M5.85084 23.2096C5.73205 23.7738 5.6875 24.353 5.6875 24.9469C5.6875 29.7433 9.59289 33.6338 14.3892 33.6338C17.27 33.6338 19.9578 32.2083 21.5764 29.8324L22.8534 23.165L21.1457 19.8981L13.424 16.3788L5.85084 23.2096Z" fill="#24BBB1"/>
<path d="M5.80578 9.90454L11.0773 11.1519L12.2356 5.16758C11.5228 4.61816 10.6318 4.32117 9.71117 4.32117C7.42437 4.32117 5.55334 6.17734 5.55334 8.47899C5.55334 8.96902 5.64244 9.45906 5.80578 9.90454Z" fill="#EF5098"/>
<path d="M5.34617 11.1667C2.99997 11.9389 1.35168 14.196 1.35168 16.6759C1.35168 19.0963 2.85147 21.2495 5.09373 22.1107L12.4887 15.4285L11.1374 12.5329L5.34617 11.1667Z" fill="#17A8E0"/>
<path d="M22.9127 29.8324C23.6403 30.3819 24.5165 30.6937 25.4223 30.6937C27.7091 30.6937 29.5801 28.8375 29.5801 26.5359C29.5801 26.031 29.491 25.541 29.3276 25.0955L24.071 23.863L22.9127 29.8324Z" fill="#93C83E"/>
<path d="M23.9816 22.482L29.7729 23.8333C32.1339 23.0611 33.7674 20.804 33.7674 18.3093C33.7674 15.9037 32.2676 13.7357 30.0253 12.8893L22.4521 19.527L23.9816 22.482Z" fill="#0779A1"/>
<path d="M49.1219 24.5757L49.8198 24.5014L49.8643 25.927C48.023 26.1794 46.449 26.313 45.1422 26.313C43.4048 26.313 42.1723 25.8082 41.4447 24.7984C40.7171 23.7886 40.3607 22.2146 40.3607 20.0911C40.3607 15.8442 42.0535 13.7208 45.4244 13.7208C47.0578 13.7208 48.2754 14.1811 49.0773 15.0869C49.8792 15.9927 50.2801 17.4331 50.2801 19.3784L50.1762 20.7594H42.1872C42.1872 22.0958 42.4248 23.0907 42.9148 23.7292C43.4048 24.3678 44.2364 24.6945 45.4392 24.6945C46.6569 24.7242 47.8745 24.6796 49.1219 24.5757ZM48.4685 19.3338C48.4685 17.8489 48.2309 16.7946 47.7557 16.1858C47.2805 15.5769 46.5084 15.2651 45.4392 15.2651C44.3701 15.2651 43.5533 15.5918 43.0188 16.2303C42.4842 16.8688 42.202 17.9083 42.1872 19.3338H48.4685Z" fill="white"/>
<path d="M52.8047 26.0904V8.71661H54.6163V26.0904H52.8047Z" fill="white"/>
<path d="M66.0653 17.641V23.5957C66.0653 24.2045 67.5651 24.3233 67.5651 24.3233L67.476 25.927C66.1989 25.927 65.1446 26.031 64.5061 25.4221C63.0509 26.0606 61.6105 26.3279 60.1552 26.3279C59.0415 26.3279 58.1951 26.0161 57.616 25.3776C57.0369 24.7539 56.7399 23.8481 56.7399 22.6601C56.7399 21.487 57.0369 20.6109 57.6308 20.0615C58.2248 19.5121 59.1603 19.1557 60.4374 19.0369L64.2388 18.6805V17.641C64.2388 16.8243 64.0606 16.2304 63.7042 15.874C63.3478 15.5176 62.8578 15.3394 62.249 15.3394H57.4823V13.7357H62.1302C63.4963 13.7357 64.4912 14.0475 65.1149 14.686C65.7534 15.3097 66.0653 16.3046 66.0653 17.641ZM58.6109 22.571C58.6109 24.056 59.2197 24.7985 60.4522 24.7985C61.5511 24.7985 62.6351 24.6203 63.6894 24.249L64.2388 24.056V20.0615L60.6601 20.403C59.9325 20.4624 59.4128 20.6703 59.0861 21.0267C58.7594 21.3831 58.6109 21.9028 58.6109 22.571Z" fill="white"/>
<path d="M73.1484 15.3543C71.3962 15.3543 70.5052 15.9631 70.5052 17.1956C70.5052 17.7599 70.7131 18.1608 71.1141 18.3984C71.515 18.636 72.4357 18.8736 73.8761 19.126C75.3165 19.3785 76.3262 19.72 76.9202 20.1803C77.5142 20.6258 77.8112 21.4722 77.8112 22.7196C77.8112 23.9669 77.4102 24.8727 76.6084 25.4519C75.8065 26.031 74.6482 26.328 73.1039 26.328C72.109 26.328 68.7679 25.9567 68.7679 25.9567L68.8718 24.3827C70.7874 24.5609 72.1832 24.7094 73.1187 24.7094C74.0543 24.7094 74.767 24.5609 75.2571 24.2639C75.7471 23.9669 75.9995 23.462 75.9995 22.7641C75.9995 22.0662 75.7917 21.591 75.3759 21.3386C74.9601 21.0861 74.0394 20.8486 72.6139 20.6258C71.1883 20.4031 70.1786 20.0764 69.5846 19.6309C68.9906 19.2003 68.6936 18.3836 68.6936 17.2105C68.6936 16.0374 69.1094 15.1612 69.941 14.597C70.7725 14.0327 71.812 13.7505 73.0445 13.7505C74.0246 13.7505 77.4399 14.003 77.4399 14.003V15.5919C75.6432 15.4879 74.1731 15.3543 73.1484 15.3543Z" fill="white"/>
<path d="M86.5716 15.5621H82.7256V21.3534C82.7256 22.7344 82.8295 23.6551 83.0226 24.0857C83.2305 24.5163 83.7057 24.7391 84.463 24.7391L86.6161 24.5906L86.7349 26.0904C85.6509 26.2685 84.8342 26.3576 84.2699 26.3576C83.0077 26.3576 82.1465 26.0458 81.6564 25.437C81.1664 24.8281 80.9288 23.6551 80.9288 21.9325V15.5621H79.2063V13.9881H80.9288V10.2758H82.7256V13.9733H86.5716V15.5621Z" fill="white"/>
<path d="M89.0963 11.241V9.14728H90.9079V11.2559L89.0963 11.241ZM89.0963 26.0904V13.9882H90.9079V26.0904H89.0963Z" fill="white"/>
<path d="M98.7779 13.7357C99.3125 13.7357 100.218 13.8396 101.495 14.0326L102.074 14.1069L102 15.577C100.708 15.4285 99.758 15.3542 99.1491 15.3542C97.783 15.3542 96.8475 15.6809 96.3575 16.3343C95.8674 16.9877 95.615 18.2053 95.615 19.9724C95.615 21.7395 95.8377 22.972 96.2981 23.6699C96.7584 24.3678 97.7088 24.7094 99.164 24.7094L102.015 24.4866L102.089 25.9864C100.59 26.2091 99.461 26.3279 98.7185 26.3279C96.8326 26.3279 95.5259 25.8379 94.8131 24.8727C94.1004 23.9075 93.7291 22.2741 93.7291 19.9724C93.7291 17.6707 94.1152 16.0522 94.8874 15.1315C95.6744 14.2108 96.9663 13.7357 98.7779 13.7357Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_219_1104">
<rect width="102.09" height="35" fill="white"/>
</clipPath>
</defs>
            </svg>
          </p>
          <div className={styles.flexContainer}>
          <div className={styles.checkbox}/><span className={styles.label}>.elser_model_1</span>
          </div>
          <hr className={styles.hrAlt} />
          <div className={styles.flexContainer}>
          <div className={styles.checkbox}/><span className={styles.labelDisabled}>lang_indent_model_1</span>
          </div>

        <br/>
          <p className={styles.emojiTitle}>🤗 HuggingFace</p>
          <div className={styles.flexContainer}>
            <div>
              <div className={styles.checkbox}/><span className={styles.labelDisabled}>stabilityai/stable-diffusion</span>
            </div>
          </div>
          <hr className={styles.hrAlt} />

          <div className={styles.flexContainer}>
            <div>
              <div className={styles.checkbox}/><span className={styles.labelDisabled}>upstage/Llama-2-70b</span>
            </div>
          </div>

          <hr className={styles.hrAlt} />

          <div className={styles.flexContainer}>
            <div>
              <div className={styles.checkbox}/><span className={styles.labelDisabled}>LinkSoul/Chinese-Llama</span>
            </div>
          </div>

        </div>
        <div className={styles.answer}>
          <p className={styles.title}>
            <span className={styles.icon}>
              <svg width="109" height="87" viewBox="0 0 109 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.07627 85.196L19.3694 63.837L46.1773 70.9497L5.07627 85.196Z" fill="#7CDFD0" />
                <ellipse cx="55.8389" cy="43.5" rx="52.5" ry="43.5" fill="#7CDFD0" />
                <circle cx="34.3389" cy="43" r="7" fill="#21387E" />
                <circle cx="56.3389" cy="43" r="7" fill="#21387E" />
                <circle cx="78.3389" cy="43" r="7" fill="#21387E" />
              </svg>
            </span>Answer</p>
          <p>The company has a vacation policy that outlines the guidelines and procedures for requesting and taking time off from work for personal and leisure purposes. Full-time employess accrue vacation time at a rate of X hours per month, equivalent to Y days per year.</p></div>
        <div className={styles.searchQuery}>
          What is our company&apos;s vacation policy?
        </div>
        <div className={styles.codeBlock}>
          <hr />
          <div className={styles.content}>
            <pre><code>&rdquo;query&rdquo;: &#123;</code></pre>
            <pre>&nbsp; &nbsp;<code>&rdquo;text-expansion&rdquo;: &#123;</code></pre>
            <pre>&nbsp; &nbsp; &nbsp;<code>&rdquo;ml.tokens&rdquo;: &#123;</code></pre>
            <pre>&nbsp; &nbsp; &nbsp; &nbsp;<code>&rdquo;model_id&rdquo;: .elser_model_1:,</code></pre>
            <pre>&nbsp; &nbsp; &nbsp; &nbsp;<code>&rdquo;model_text&rdquo;: &rdquo;What is our company&apos;s vacation policy?&rdquo;</code></pre>
            <pre>&nbsp; &nbsp; &nbsp; &nbsp;<code>&#125;</code></pre>
            <pre>&nbsp; &nbsp; &nbsp;<code>&#125;</code></pre>
            <pre>&nbsp; &nbsp;<code>&#125;</code></pre>
          </div>
        </div>
      </div>
    </div>
  )
}
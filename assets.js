export const styles = `
    .widget__container {
        width: 100%;
        height: 100%;
    }

    .widget__container * {
        box-sizing: border-box;
        font-family: Noto Sans JP, sans-serif;
    }
     
    .widget__wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .control__container {
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 1;
    }

    .btn__reserve--cw {
        text-align: center;
        padding: 16px 22px;
        background: #2E2F31;
        color: #d3cdcd;
        border: 2px solid #d3cdcd;
        cursor: pointer;
    }

    .link__reserve--tc {
        text-align: center;
        color: #d3cdcd !important;
    }

    .modal__container {
        width: 100vw;
        height: 100svh;
        position: absolute;
        top: 0;
        left: 0;
        // transform: translate(-50%,-50%);
        background: #000000CC;
        z-index: 5;
    }

    #root__modal {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .modal__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        width: 100%;
        max-width: 680px;

        padding: 48px 64px 40px;
        background: #FAFAFA;
        position: relative;
    }

    .modal__content--close {
        position: absolute;
        top: 12px;
        left: 12px;
        cursor: pointer;
    }

    .modal__title {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center
    }

    .modal__title--sub {
        color: #BCA382;
        font-size: 20px;
        line-height: 28px;
        font-weight: 400;
    }

    .modal__link {
        position: relative;
        padding: 24px auto;
        width: 100%;
        height: 84px;
        background: #C0AB8C;
        border-radius: 80px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
    }

    .modal__link--text {
        color: #2A1E0C;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 1px;
    }

    .modal__link--icon {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
    }

    .modal__body {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        align-items: center;
    }

    .modal__body--item {
        display: flex;
        gap: 16px;
        align-items: center;
        width: 100%;
    }

    .item__icon {
        width: 152px;
        height: 152px;
        border-radius: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #2E2F31
    }

    .item__content {
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .item__title {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
        margin-bottom: 8px;
    }

    .item__description {
        font-size: 18px;
        font-weight: 400;
    }

    .modal__body--note {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center
    }

    .modal__body--footer {
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        text-decoration: none;
        border-bottom: 1px solid #192028;
        color: #192028;
        width: max-content;
    }

    .widget__icon--close {
        width: 32px;
        height: 32px;
    }

    .widget__icon--logo {
        width: 389px;
        height: 32px;
    }

    .widget__icon--navigate {
        width: 24px;
        height: 24px;
    }

    .widget__icon--body {
        width: 56px;
        height: 56px;
    }
    
    .widget__hidden {
        display: none
    }

    @media screen and (max-width: 1440px) {
        .modal__link {
            height: 68px;
        }
        .item__icon {
            width: 109px;
            height: 109px;
        }
        .item__title {
            font-size: 16px;
            line-height: 24px;
        }
        .widget__icon--body {
            width: 48px;
            height: 48px;
        }
    }

    @media screen and ( max-width: 768px) {
        .modal__link {
            height: 68px;
        }
        .item__icon {
            width: 96px;
            height: 96px;
        }
        .item__title {
            font-size: 16px;
            line-height: 24px;
        }
        .widget__icon--body {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and ( max-width: 576px) {
        .modal__content {
            padding: 40px 20px;
            gap: 24px;
        }
        .widget__icon--close {
            width: 24px;
            height: 24px;
        }
        .widget__icon--logo {
            width: 292px;
            height: 24px;
        }
        .modal__title--sub {
            font-size: 16px;
            line-height: 23px;
        }
        .modal__link {
            height: 68px;
        }
        .widget__icon--navigate {
            width: 20px;
            height: 20px;
        }
        .item__icon {
            width: 96px;
            height: 96px;
        }
        .item__title {
            font-size: 16px;
            line-height: 24px;
        }
        .item__description {
            font-size: 13px;
            font-weight: 400;
        }
        .widget__icon--body {
            width: 40px;
            height: 40px;
        }
        .modal__link--text {
            font-size: 18px;
        }
        .modal__body--note  {
            font-size: 13px;
            margin-bottom: 8px;
        }
    }
`;

export const LOGO = `
    <svg width="292" height="27" viewBox="0 0 292 27" fill="none" xmlns="http://www.w3.org/2000/svg" class="widget__icon--logo">
        <path d="M0.185547 13.378V13.3079C0.185547 6.26861 5.68786 0.5 13.5181 0.5C18.2797 0.5 21.1611 2.09027 23.6355 4.35873L20.7216 7.57824C18.6541 5.73852 16.4402 4.49905 13.4855 4.49905C8.5367 4.49905 4.95531 8.38897 4.95531 13.2377V13.3079C4.95531 18.1566 8.5367 22.1167 13.4855 22.1167C16.6599 22.1167 18.6948 20.8772 20.9088 18.8972L23.8309 21.7269C21.1367 24.4164 18.182 26.1158 13.339 26.1158C5.80182 26.108 0.185547 20.4875 0.185547 13.378Z" fill="#BCA382"/>
        <path d="M29.7422 0.5H34.1836V20.3633H47.4762V24.1453H29.7422V0.5Z" fill="#BCA382"/>
        <path d="M51.418 15.023V0.5H55.8678V14.8404C55.8678 19.5252 58.292 22.0503 62.2714 22.0503C66.2507 22.0503 68.643 19.6761 68.643 15.023V0.5H73.0928V14.8007C73.0928 22.3282 68.8264 26.1158 62.1996 26.1158C55.5727 26.1158 51.418 22.3361 51.418 15.0151V15.023Z" fill="#BCA382"/>
        <path d="M155.85 13.378V13.3079C155.85 6.33877 161.172 0.5 168.692 0.5C176.213 0.5 181.465 6.26861 181.465 13.2377V13.3079C181.465 20.277 176.143 26.1158 168.623 26.1158C161.102 26.1158 155.85 20.3471 155.85 13.378ZM176.953 13.378V13.3079C176.953 8.49811 173.49 4.49905 168.623 4.49905C163.756 4.49905 160.362 8.42795 160.362 13.2377V13.3079C160.362 18.1177 163.825 22.1167 168.692 22.1167C173.559 22.1167 176.953 18.1878 176.953 13.378Z" fill="#BCA382"/>
        <path d="M187.377 0.5H191.425L204.753 16.8492V0.5H209.052V24.1453H205.395L191.676 7.31962V24.1453H187.377V0.5Z" fill="#BCA382"/>
        <path d="M216.934 0.5H225.869C233.401 0.5 238.608 5.59983 238.608 12.2557V12.3227C238.608 18.9785 233.401 24.1453 225.869 24.1453H216.934V0.5ZM225.869 20.3633C230.903 20.3633 234.193 17.0205 234.193 12.3897V12.3227C234.193 7.69187 230.903 4.28206 225.869 4.28206H221.145V20.3633H225.869Z" fill="#BCA382"/>
        <path d="M244.52 0.5H264.033V4.21505H249.143V10.3646H264.033V14.0797H249.143V20.4303H264.224V24.1453H244.52V0.5Z" fill="#BCA382"/>
        <path d="M270.137 0.5H281.521C284.729 0.5 287.245 1.37823 288.893 2.86676C290.244 4.1469 291.008 5.90337 291.008 7.96498V8.03197C291.008 11.917 288.491 14.2466 284.914 15.1918L291.812 24.1453H286.522L280.251 15.9063H274.631V24.1453H270.145V0.5H270.137ZM281.191 12.2222C284.399 12.2222 286.441 10.6667 286.441 8.27013V8.20315C286.441 5.67265 284.471 4.28831 281.151 4.28831H274.623V12.2222H281.191Z" fill="#BCA382"/>
        <path d="M80.9746 0.5H92.652C95.6267 0.5 97.9703 1.24473 99.4536 2.5927C100.609 3.64278 101.199 4.92372 101.199 6.51001V6.57703C101.199 9.41447 99.4126 10.9337 97.4787 11.8498C100.527 12.7956 102.649 14.3819 102.649 17.5917V17.6587C102.649 21.8813 98.8226 24.1453 93.0208 24.1453H80.9746V0.5ZM91.7178 10.472C94.6515 10.472 96.6264 9.42192 96.6264 7.26219V7.19516C96.6264 5.33333 94.9875 4.18644 92.0538 4.18644H85.4735V10.472H91.7178ZM93.0535 20.4738C96.1757 20.4738 98.0769 19.3567 98.0769 17.2267V17.1597C98.0769 15.1638 96.3314 13.9797 92.7257 13.9797H85.4735V20.4663H93.0617L93.0535 20.4738Z" fill="#BCA382"/>
        <path d="M120.383 0.566337H124.651L130.009 16.7893L135.527 0.5H138.866L144.384 16.7893L149.742 0.566337H153.88L146.053 24.1453H142.654L137.135 7.3253L131.617 24.1453H128.218L120.383 0.566337Z" fill="#BCA382"/>
    </svg>
`;

export const ICON_CLOSE = `
    <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="widget__icon--close">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4667 18.3933L9.41333 25.4467L8 24.0333L15.0533 16.9667L8 9.91333L9.41333 8.5L16.4667 15.5533L23.5333 8.5L24.9467 9.91333L17.8933 16.9667L24.9467 24.0333L23.5333 25.4467L16.4667 18.3933Z" fill="#192028"/>
    </svg>
`;

export const ICON_NAVIGATE = `
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="widget__icon--navigate">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16602 17.1666V4.66663H9.31071V6.13769H5.63708V15.6875H15.1869V12.0139H16.666V17.1666H4.16602Z" fill="#192028"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 10.2921L14.1404 6.14362H11.4931V4.66663H16.6667V9.83208H15.1816V7.19286L11.0412 11.3333L10 10.2921Z" fill="#424242"/>
    </svg>
`;

export const ICON_RESERVATION = `
    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg" class="widget__icon--body">
        <path d="M17.5 50.0833V8.08331C17.5 7.11681 16.7165 6.33331 15.75 6.33331C14.7835 6.33331 14 7.11682 14 8.08331V50.0833C14 51.0498 14.7835 51.8333 15.75 51.8333C16.7165 51.8333 17.5 51.0498 17.5 50.0833Z" fill="#C0AB8C"/>
        <path d="M40.834 50.0833V26.75C40.834 25.7835 40.0505 25 39.084 25C38.1175 25 37.334 25.7835 37.334 26.75V50.0833C37.334 51.0498 38.1175 51.8333 39.084 51.8333C40.0505 51.8333 40.834 51.0498 40.834 50.0833Z" fill="#C0AB8C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 25C10.9175 25 7 21.0825 7 16.25V8.08331C7 7.11681 7.7835 6.33331 8.75 6.33331C9.7165 6.33331 10.5 7.11681 10.5 8.08331V16.25C10.5 19.1495 12.8505 21.5 15.75 21.5C18.6495 21.5 21 19.1495 21 16.25V8.08331C21 7.11682 21.7835 6.33331 22.75 6.33331C23.7165 6.33331 24.5 7.11681 24.5 8.08331V16.25C24.5 21.0825 20.5825 25 15.75 25Z" fill="#C0AB8C"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M39.084 27.3334C34.254 27.3334 30.334 23.4134 30.334 18.5834V13.9167C30.334 9.08669 34.254 5.16669 39.084 5.16669C43.914 5.16669 47.834 9.08669 47.834 13.9167V18.5834C47.834 23.4134 43.914 27.3334 39.084 27.3334ZM39.084 8.66669C36.1906 8.66669 33.834 11.0234 33.834 13.9167V18.5834C33.834 21.4767 36.1906 23.8334 39.084 23.8334C41.9773 23.8334 44.334 21.4767 44.334 18.5834V13.9167C44.334 11.0234 41.9773 8.66669 39.084 8.66669Z" fill="#C0AB8C"/>
    </svg>
`;

export const ICON_SEAT_TYPE = `
    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg" class="widget__icon--body">
        <path d="M23.4157 46.4434C22.3912 46.4434 21.5607 45.6129 21.5607 44.5884C21.5607 43.5639 22.3912 42.7334 23.4157 42.7334H26.6007V26.1901H14.689C13.6645 26.1901 12.834 25.3596 12.834 24.3351C12.834 23.3106 13.6645 22.4801 14.689 22.4801H41.6857C42.7101 22.4801 43.5407 23.3106 43.5407 24.3351C43.5407 25.3596 42.7101 26.1901 41.6857 26.1901H29.774V42.7334H32.959C33.9835 42.7334 34.814 43.5639 34.814 44.5884C34.814 45.6129 33.9835 46.4434 32.959 46.4434H23.4157Z" fill="#C0AB8C"/>
        <path d="M14.9107 46.7467C14.0344 46.7467 13.324 46.0363 13.324 45.16V34.3567H5.50732V45.16C5.50732 46.0363 4.79694 46.7467 3.92065 46.7467C3.04436 46.7467 2.33398 46.0363 2.33398 45.16V13.7534C2.33398 12.8771 3.04436 12.1667 3.92065 12.1667C4.79694 12.1667 5.50732 12.8771 5.50732 13.7534V31.1834H16.3807C17.2569 31.1834 17.9673 31.8937 17.9673 32.77V32.8867C17.9673 33.6985 17.3092 34.3567 16.4973 34.3567V45.16C16.4973 46.0363 15.7869 46.7467 14.9107 46.7467Z" fill="#C0AB8C"/>
        <path d="M52.4528 46.7467C51.5765 46.7467 50.8661 46.0363 50.8661 45.16V34.3567H43.0261V45.16C43.0261 46.0363 42.3158 46.7467 41.4395 46.7467C40.5632 46.7467 39.8528 46.0363 39.8528 45.16V34.3567C39.041 34.3567 38.3828 33.6985 38.3828 32.8867V32.77C38.3828 31.8937 39.0932 31.1834 39.9695 31.1834H50.8661V13.7534C50.8661 12.8771 51.5765 12.1667 52.4528 12.1667C53.3291 12.1667 54.0395 12.8771 54.0395 13.7534V45.16C54.0395 46.0363 53.3291 46.7467 52.4528 46.7467Z" fill="#C0AB8C"/>
    </svg>
`;

export const ICON_GIFT = `
    <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg" class="widget__icon--body">
        <path d="M27.9993 16.8333H17.4993C15.9523 16.8333 14.4685 16.2187 13.3746 15.1248C12.2806 14.0308 11.666 12.5471 11.666 11C11.666 9.45289 12.2806 7.96916 13.3746 6.8752C14.4685 5.78124 15.9523 5.16666 17.4993 5.16666C25.666 5.16666 27.9993 16.8333 27.9993 16.8333ZM27.9993 16.8333H38.4993C40.0464 16.8333 41.5302 16.2187 42.6241 15.1248C43.7181 14.0308 44.3327 12.5471 44.3327 11C44.3327 9.45289 43.7181 7.96916 42.6241 6.8752C41.5302 5.78124 40.0464 5.16666 38.4993 5.16666C30.3327 5.16666 27.9993 16.8333 27.9993 16.8333ZM27.9993 16.8333L27.9994 51.8333M4.66602 33.1667H51.3327M4.66602 24.3L4.66602 44.3666C4.66602 46.9802 4.66602 48.287 5.17465 49.2853C5.62206 50.1634 6.33597 50.8773 7.21406 51.3247C8.21231 51.8333 9.5191 51.8333 12.1327 51.8333L43.866 51.8333C46.4796 51.8333 47.7864 51.8333 48.7846 51.3247C49.6627 50.8773 50.3766 50.1634 50.824 49.2853C51.3327 48.287 51.3327 46.9802 51.3327 44.3667V24.3C51.3327 21.6864 51.3327 20.3796 50.824 19.3814C50.3766 18.5033 49.6627 17.7894 48.7846 17.342C47.7864 16.8333 46.4796 16.8333 43.866 16.8333L12.1327 16.8333C9.51911 16.8333 8.21232 16.8333 7.21406 17.342C6.33597 17.7894 5.62206 18.5033 5.17465 19.3814C4.66602 20.3796 4.66602 21.6864 4.66602 24.3Z" stroke="#C0AB8C" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`;

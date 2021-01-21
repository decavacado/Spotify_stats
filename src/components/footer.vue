<template>
    <div id="footer" class="footer">
        <div class="others"> 
            <p class="content light tent">Stats for <strong>Spotify bot</strong></p>
            <p class="socials"><a href="https://www.instagram.com/decavacado/" target="_blank"><i class="lab la-instagram"></i></a><a href="https://twitter.com/decavacado" target="_blank"><i class="lab la-twitter"></i></a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "footer",
    data() {
        return {

        }
    }
 }
</script>

<style scoped lang="less">
a {
   color: black; 
}
#footer {
    position: relative;
    bottom: 0;
    width: 100%;
    height: 300px;
}

.tent {
    /*position: absolute; */
    transition: opacity transform ease-in;
    animation: move ease-in 1s;
}

@keyframes move {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0%);
        opacity: 10;
    }
}
.others {
    display: flex;
    flex-direction: column;
    justify-content: center;;
}

.others p {
    align-self: center;
}

.others .socials {
    margin-top: 10px;
}

.light {
    color: rgba(65, 66, 66, 0.8);
    font-weight: 300;
}

i {
    font-size: 32px;
}
</style>
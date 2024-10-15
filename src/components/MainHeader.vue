<template>
    <div>
        <header class="flex justify-between fixed bg-black text-white items-center text-xl ">
            <div class="px-4">
                <router-link to="/">
                    <span class="px-3 py-4 block leading-none">
                        Sites.wiki
                    </span>
                </router-link>
            </div>
            <nav class="flex">
                <ul class="flex m-0 p-0">
                    <li v-for="item in dataMenu" :key="item.id">
                        <div class="py-[10px] px-3">
                            <router-link :to="item.url">{{ item.title }}</router-link>
                        </div>
                    </li>
                </ul>
                <button>
                    <router-link to="">
                        <font-awesome-icon class="text-base px-4 mb-[2px]" :icon="['fas', 'magnifying-glass']" />
                    </router-link>
                </button>
            </nav>
        </header>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const dataMenu = ref([
    {
        id: 1,
        title:'Wiki',
        url: '#',
    },
    {
        id: 2,
        title:'Classic Wiki',
        url: '#',
    },
    {
        id: 3,
        title:'Article',
        url: '#',
    },
    {
        id: 4,
        title:'Page',
        url: '#',
    },
    {
        id: 5,
        title:'Tasks',
        url: '#',
    },
])
</script>
<script setup lang="ts"></script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 160 160">
    <defs>
      <filter
        id="a"
        width="160"
        height="160"
        x="0"
        y="0"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-12" />
        <feGaussianBlur />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.61569 0 0 0 0 0.17647 0 0 0 0 0.96078 0 0 0 1 0" />
        <feBlend in2="shape" result="effect_innerShadow_1" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-4" />
        <feGaussianBlur />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.14118 0 0 0 0 0.18824 0 0 0 0 0.2549 0 0 0 1 0" />
        <feBlend in2="effect_innerShadow_1" result="effect_innerShadow_2" />
      </filter>
      <filter
        id="c"
        width="52.83"
        height="49.812"
        x="54.34"
        y="55.85"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-6" />
        <feGaussianBlur />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.14118 0 0 0 0 0.18824 0 0 0 0 0.2549 0 0 0 1 0" />
        <feBlend in2="shape" result="effect_innerShadow_1" />
      </filter>
      <linearGradient id="b" x1="80" x2="80" y1="26.269" y2="160" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE71FE" />
        <stop offset="1" stop-color="#7199FF" />
      </linearGradient>
    </defs>
    <g filter="url(#a)">
      <rect width="160" height="160" fill="url(#b)" rx="75" />
    </g>
    <g filter="url(#c)">
      <path
        fill="#FFF"
        d="m56.3 81.91-.23-1.47c-1.95-12.75-2.93-19.12.75-22.59 3.67-3.46 9.82-1.98 22.13.98l1.63.39c16.81 4.05 25.21 6.07 26.44 12.02 1.24 5.94-5.64 11.26-19.4 21.9l-1.41 1.08c-11.18 8.65-16.77 12.97-21.72 10.94-4.94-2.03-6.02-9.11-8.19-23.25Z"
      />
    </g>
  </svg>
</template>

<style scoped lang="scss"></style>

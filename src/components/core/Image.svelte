<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<div class="my-4 py-4 flex justify-center items-center rounded bg-gray-100 hover:bg-gray-200 transition-colors">
  <img {src} {alt}>
</div>
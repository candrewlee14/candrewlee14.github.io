<script lang="ts">
    interface Props {
        val?: string | undefined;
        className?: string | undefined;
        style?: string | undefined;
    }

    let { val = undefined, className = undefined, style = undefined }: Props = $props();
</script>

<div
    {style}
    class={`bg-slate-300 dark:bg-slate-600 p-2 mx-1 rounded h-8 text-center font-bold text-white flex justify-center items-center ${className}`}
>
    <span>{val ?? ""}</span>
</div>

<style>
    @keyframes bounce {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(5px);
        }
        100% {
            transform: translateY(0);
        }
    }

    .bounce {
        animation: bounce 0.5s 1;
    }
</style>

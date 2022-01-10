<script>
    import '../app.css';
    import Logo from '../components/Logo.svelte';
    import Navbar from '../components/Navbar.svelte';
</script>

<div class="flex flex-col h-full w-full items-center bg-white dark_bg-gray-800">
    <Logo/>
    <Navbar/>
    <div class="w-5/6 h-2 bg-[#EFEFEF] dark_bg-gray-900 my-6"/>
    <slot></slot>
</div>

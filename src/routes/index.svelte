<div class="w-full h-full flex justify-center">
    <div class="w-3/4 h-full flex flex-col items-center mt-6">
        <h1 class="text-center">Hello! 👋</h1>
        <h1 class="text-center">My name is Andrew Lee</h1>
        <div class="flex flex-row flex-wrap justify-center mt-6">
            <div class="flex flex-col items-center mb-8" style="min-width: 300px;">
                <div id="image" />
            </div>
            <div class="max-w-xl" style="min-width: 250px;">
                <p>
                I'm currently working on detecting river trash at <a class="vpi" href="https://www.vpitechnology.com/">VPI Technologies</a>.
                I'm also a student at the <a class="utah" href="https://www.cs.utah.edu/">University of Utah</a> 
                earning my Honors BS/MS in Computer Science.
                </p>
                <p>
I'm interested in art, music, fashion, technology, business, and health.
When I'm not working or studying, you can find me playing basketball with friends, jamming on the piano, playing Super Smash Bros, or coding on a fun project.
                </p>
            </div>
        </div>
    </div>
</div>

<style>
    p {
        width: 100%;
        font-family: "Barlow";
        @apply mb-4;
    }
    #image {
        background: #CFCFCF;
        border: 3px solid;
        border-radius: 3px;
        width: 200px;
        height: 200px;
    }
    .utah {
        @apply font-bold transition text-red-800 hover_text-red-500;
    }
    .vpi {
        @apply font-bold transition text-sky-800 hover_text-sky-500;
    }
</style>

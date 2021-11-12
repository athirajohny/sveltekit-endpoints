<script context="module">
    export const load = async({fetch}) => {
    const res = await fetch("/api/post");
    const data = await res.json();
    console.log(data);
    return {
        props : { data, },
    };
    };
    </script>
    
    <script>
        export let data;
    </script>
    
    <div class="p-10">
        {JSON.stringify(data)}
    </div>
    
<script>
    // library for creating dropdown menu appear on click
    import { createPopper } from "@popperjs/core";

    // core components

    let dropdownPopoverShow = false;

    let btnDropdownRef;
    let popoverDropdownRef;

    export let color = "default";

    const toggleDropdown = (event) => {
        event.preventDefault();
        if (dropdownPopoverShow) {
            dropdownPopoverShow = false;
        } else {
            dropdownPopoverShow = true;
            createPopper(btnDropdownRef, popoverDropdownRef, {
                placement: "bottom-start",
            });
        }
    };
</script>

<div>
    <a
        class="{color === 'default'
            ? 'text-slate-500'
            : 'text-white'} py-1 px-3"
        href="#pablo"
        bind:this={btnDropdownRef}
        on:click={toggleDropdown}
    >
        <i class="fas fa-ellipsis-v" />
    </a>
    <div
        bind:this={popoverDropdownRef}
        class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 {dropdownPopoverShow
            ? 'block'
            : 'hidden'}"
    >
        <a
            href="#action"
            on:click={(e) => e.preventDefault()}
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
            Edit
        </a>
        <a
            href="#action"
            on:click={(e) => e.preventDefault()}
            class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-slate-700"
        >
            Add to favorites
        </a>
    </div>
</div>

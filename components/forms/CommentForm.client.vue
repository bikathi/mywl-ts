<template>
	<!-- Optional comment title -->
	<div class="mb-2">
		<input
			type="text"
			maxlength="40"
			id="input-label"
			class="p-4 block text-sm w-full border rounded-md focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
			placeholder="optional comment title(30 characters)" />
		<span
			class="font-extralight tracking-wider inline-flex items-center text-xs sm:text-sm text-gray-400"
			><Icon
				name="ri:information-line"
				color="currentColor"
				size="14"
				class="mr-1 md:text-sm" />Titles help add context to your
			comment</span
		>
	</div>
	<!-- end of optional comment titlw -->
	<!-- Begin of textarea input -->
	<!-- Textarea -->
	<div class="relative">
		<TiptapEditorContent
			:editor="editor"
			class="p-4 pb-12 block w-full min-h-48 border bg-gray-100 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" />

		<!-- Toolbar -->
		<div
			v-if="editor"
			class="absolute bottom-px inset-x-px p-2 bg-gray-50 dark:bg-slate-700">
			<div class="flex justify-between items-center">
				<div class="space-x-2 md:space-x-4">
					<button
						@click="editor.chain().focus().toggleBold().run()"
						:disabled="
							!editor.can().chain().focus().toggleBold().run()
						"
						:class="{ 'is-active': editor.isActive('bold') }">
						<Icon
							name="ooui:bold-a"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="editor.chain().focus().toggleItalic().run()"
						:disabled="
							!editor.can().chain().focus().toggleItalic().run()
						"
						:class="{ 'is-active': editor.isActive('italic') }">
						<Icon
							name="clarity:italic-line"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="editor.chain().focus().setParagraph().run()"
						:class="{ 'is-active': editor.isActive('paragraph') }">
						<Icon
							name="ph:paragraph-fill"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 1 })
								.run()
						"
						:class="{
							'is-active': editor.isActive('heading', {
								level: 1,
							}),
						}">
						<Icon
							name="mingcute:heading-1-fill"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="
							editor
								.chain()
								.focus()
								.toggleHeading({ level: 2 })
								.run()
						"
						:class="{
							'is-active': editor.isActive('heading', {
								level: 2,
							}),
						}">
						<Icon
							name="mingcute:heading-2-fill"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="editor.chain().focus().toggleBulletList().run()"
						:class="{ 'is-active': editor.isActive('bulletList') }">
						<Icon
							name="ic:baseline-list"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="editor.chain().focus().toggleBlockquote().run()"
						:class="{ 'is-active': editor.isActive('blockquote') }">
						<Icon
							name="tabler:blockquote"
							color="currentColor"
							size="20" />
					</button>
					<button
						@click="
							editor
								.chain()
								.focus()
								.setImage({
									src: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg',
									alt: 'Sample Alt Text',
								})
								.run()
						"
						:class="{ 'is-active': editor.isActive('blockquote') }">
						<Icon
							name="ic:outline-image"
							color="currentColor"
							size="20" />
					</button>
				</div>

				<!-- Button Group -->
				<div class="flex items-center gap-x-1">
					<!-- Send Button -->
					<button
						type="button"
						class="inline-flex flex-shrink-0 justify-center items-center h-8 w-fit px-3 py-1 text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 rounded-full">
						Post
					</button>
					<!-- End Send Button -->
				</div>
				<!-- End Button Group -->
			</div>
		</div>
		<!-- End Toolbar -->
	</div>
	<!-- End Textarea -->
</template>

<script setup lang="ts">
	import Image from '@tiptap/extension-image';
	const userComment = ref('');
	const editor = useEditor({
		content: "<p>What's on your mind?...</p>",
		extensions: [TiptapStarterKit.configure({ codeBlock: false }), Image],
		onUpdate: (editor) => {
			userComment.value = editor.editor.getHTML();
		},
	});
</script>

<style lang="css">
	/* Basic editor styles */
	.tiptap {
		outline: none;
		width: 100%;
		text-wrap: wrap;
		min-height: 100%;
		margin-bottom: 1px;

		> * + * {
			margin-top: 0.75em;
		}

		ul {
			padding: 0 1rem;
			list-style-type: disc;
		}

		h1 {
			font-size: 1.1rem;
			font-size: 1.4rem;
			font-weight: bolder;
		}

		h2 {
			font-size: 1.1rem;
			font-weight: bold;
		}

		code {
			background-color: rgba(#616161, 0.1);
			color: #616161;
		}

		pre {
			background: #0d0d0d;
			color: #fff;
			font-family: 'JetBrainsMono', monospace;
			padding: 0.75rem 1rem;
			border-radius: 0.5rem;

			code {
				color: inherit;
				padding: 0;
				background: none;
				font-size: 0.8rem;
			}
		}

		img {
			max-width: 100%;
			height: auto;
			border: 1px solid;
			border-radius: 5px;
			width: 95%;
			height: auto;
		}

		blockquote {
			padding-left: 1rem;
			border-left: 5px solid rgb(51 65 85);
			padding-top: 2px;
			font-weight: 600;
			padding-bottom: 2px;
		}
	}
</style>

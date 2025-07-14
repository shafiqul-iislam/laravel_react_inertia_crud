import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create Post',
        href: '/post-create',
    },
];

const Create = () => {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Post" />
            <div className="container ms-auto p-4">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl">Create New Post</h2>
                    <Link href="/posts" className="btn">Back</Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter post title"

                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-1">Content</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Write your post content here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}

export default Create
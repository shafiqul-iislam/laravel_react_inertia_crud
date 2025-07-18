import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Updated Post',
        href: '/edit-create',
    },
];

const Edit = ({ editPost }: any) => {

    // useForm is instence of inertia
    const { data, setData, put, reset, errors, processing } = useForm({ // use that instead of useState
        id: editPost.id,
        title: editPost.title,
        content: editPost.content,
    });

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        put('/update-post', {
            onSuccess: () => {
                reset('title', 'content');
            }
        });
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Update Post" />
            <div className="container ms-auto p-4">
                <div className="flex items-center justify-between mb-9">
                    <h2 className="text-2xl">Update Post</h2>
                    <Link href="/posts" className="btn">Back</Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <form onSubmit={submitForm} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                name='title'
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter post title"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Content</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                name='content'
                                value={data.content}
                                onChange={(e) => setData('content', e.target.value)}
                                placeholder="Write your post content here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
                        >
                            {processing ? 'Processing...' : 'Submit'}
                        </button>
                    </form>
                </div>
            </div>
        </AppLayout>
    )
}

export default Edit
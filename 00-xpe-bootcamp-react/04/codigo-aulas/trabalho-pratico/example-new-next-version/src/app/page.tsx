import Image from 'next/image';
import List from './components/List';
import Form from "./components/Form";

export default function Home() {
	return (
		<div className="border border-gray-400 m-2 p-2">
			<div>
        <Form/>
			</div>
			<List />
		</div>
	);
}

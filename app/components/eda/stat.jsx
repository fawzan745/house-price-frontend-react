import { Card } from '@/components/ui/card';

export default function Stat() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <Card>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 text-3xl font-extrabold">1,12M</div>
          <div className="text-gray-500 dark:text-gray-400">Average Price</div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 text-3xl font-extrabold">94</div>
          <div className="text-gray-500 dark:text-gray-400">Locations</div>
        </div>
      </Card>
      <Card className="col-span-2">
        <div className="flex items-center justify-evenly">
          <div>
            <div className="mb-2 text-3xl font-extrabold">3</div>
            <p className="text-gray-500 dark:text-gray-400">Bedroom</p>
          </div>
          <div>
            <div className="mb-2 text-3xl font-extrabold">2</div>
            <p className="text-gray-500 dark:text-gray-400">Bathroom</p>
          </div>
          <div>
            <div className="mb-2 text-3xl font-extrabold">101 m²</div>
            <p className="text-gray-500 dark:text-gray-400">Land Area</p>
          </div>
          <div>
            <div className="mb-2 text-3xl font-extrabold">100 m²</div>
            <p className="text-gray-500 dark:text-gray-400">Building Area</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

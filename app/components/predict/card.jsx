import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { local_price } from '@/lib/utils';

export default function ResultCard({ house }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Result</CardTitle>
        <CardDescription>
          <span className="mb-2 block">Calculation results based on :</span>
          <div className="flex gap-4">
            <span>Bed: {house.bedroom}</span>
            <span>Bath: {house.bathroom}</span>
            <span>LA: {house.land_area}m²</span>
            <span>BA: {house.building_area}m²</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <small className="text-sm text-muted-foreground">
          Prediction price
        </small>
        <p className="text-2xl font-bold">
          {local_price.format(house.price * 1_000_000)}
        </p>
      </CardContent>
    </Card>
  );
}

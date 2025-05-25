import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

export default function ResultCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Result</CardTitle>
        <CardDescription>
          <span className="mb-2 block">Calculation results based on :</span>
          <div className="flex gap-4">
            <span>Bed: 2</span>
            <span>Bath: 1</span>
            <span>LA: 50m²</span>
            <span>BA: 56m²</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <small className="text-sm text-muted-foreground">
          Prediction price
        </small>
        <p className="text-2xl font-bold">Rp 687.797.212</p>
      </CardContent>
    </Card>
  );
}

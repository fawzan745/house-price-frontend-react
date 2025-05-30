import BarBottomPrice from '@/components/eda/bar-bottom-price';
import BarTopPrice from '@/components/eda/bar-top-price';
import PieBathroom from '@/components/eda/pie-bathroom';
import PieBedroom from '@/components/eda/pie-bedroom';
import ResidualsScatter from '@/components/eda/residuals-scatter';
import HeatmapCorrelation from '@/components/eda/heatmap-correlation';
import HeatmapPriceArea from '@/components/eda/heatmap-price-area';
import Stat from '@/components/eda/stat';
import { Card } from '@/components/ui/card';
import FeatureImportance from '@/components/eda/feature-importance';
import ModelEvaluation from '@/components/eda/model-evaluation';
import PredictionError from '@/components/eda/prediction-error';
import ResidualDistribution from '@/components/eda/residual-distribution';
import HeatmapResidual from '@/components/eda/heatmap-residual';
import LearningCurve from '@/components/eda/learning-curve';

export async function clientLoader() {
  const responses = await Promise.all([
    fetch('/data/dist_residual.json'),
    fetch('/data/dist_predict.json'),
    fetch('/data/result_table.json'),
    fetch('/data/feature_importance.json'),
    fetch('/data/heatmap_residual.json'),
    fetch('/data/pie_chart.json'),
    fetch('/data/bar_chart_mean_price.json'),
    fetch('/data/learning_curve.json'),
    fetch('/data/heatmap_price_area.json'),
    fetch('/data/heatmap_correlation.json'),
  ]);

  if (responses.some((res) => !res.ok)) {
    throw new Error('Failed to fetch one or more data');
  }

  const [
    dist_residuals,
    dist_predict,
    result_table,
    feature_importance,
    heatmap_residual,
    pie_chart,
    bar_chart_mean_price,
    learning_curve, 
    heatmap_price_area, 
    heatmap_correlation
  ] = await Promise.all(responses.map((res) => res.json()));

  return {
    dist_residuals,
    dist_predict,
    result_table,
    feature_importance,
    heatmap_residual,
    pie_chart,
    bar_chart_mean_price,
    learning_curve, 
    heatmap_price_area, 
    heatmap_correlation
  };
}

export default function EDA() {
  return (
    <main className="overflow-x-hidden">
      <div className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl space-y-8 px-4 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            Explorations
          </h2>

          <section>
            <Stat />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <Card className="w-full px-4">
                <PieBathroom />
              </Card>
              <Card className="w-full px-4">
                <PieBedroom />
              </Card>

              <Card className="w-full px-4">
                <BarTopPrice />
              </Card>
              <Card className="w-full px-4">
                <BarBottomPrice />
              </Card>

              <Card className="w-full px-4">
                <HeatmapCorrelation />
              </Card>
              <Card className="w-full px-4">
                <HeatmapPriceArea />
              </Card>
            </div>
          </section>

          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
            Model Evaluation
          </h2>
          <section className="grid gap-4 grid-cols-4">
            <Card className="w-full px-4 col-span-2">
              <FeatureImportance />
            </Card>
            <Card className="w-full px-4 col-span-2">
              <ModelEvaluation />
            </Card>

            <Card className="w-full col-span-4 px-4">
              <PredictionError />
            </Card>

            <Card className="w-full px-4 col-span-3">
              <ResidualsScatter />
            </Card>
            <Card className="w-full px-4 col-span-1">
              <ResidualDistribution />
            </Card>

            <Card className="w-full px-4 col-span-2">
              <HeatmapResidual />
            </Card>
            <Card className="w-full px-4 col-span-2">
              <LearningCurve />
            </Card>
          </section>
        </div>
      </div>
    </main>
  );
}

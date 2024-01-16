import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import { getExecutiveSummary, getProfitLossData } from 'utils/services';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const [profitLossData, setProfitLossData] = useState({});
  const [summaryLoading, setSummaryLoading] = useState(true);
  const [executiveSummary, setExecutiveSummary] = useState({});
  const user = localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'));

  const isAppConnected = user && user.connectedApplications?.length > 0;
  useEffect(() => {
    setLoading(false);
    const profitLoss = async () => {
      setLoading(true);
      const result = await getProfitLossData();
      if (result.isSuccess) {
        const { data } = result;
        setProfitLossData(data);

        setLoading(false);
      } else {
        console.log(result);
        setLoading(false);
      }
    };
    const executiveSummary = async () => {
      setSummaryLoading(true);
      const result = await getExecutiveSummary();
      if (result.isSuccess) {
        const { data } = result;
        setExecutiveSummary(data);

        setSummaryLoading(false);
      } else {
        console.log(result);
        setSummaryLoading(false);
      }
    };
    // do not load chart when loading
    if (user) {
      profitLoss();
      executiveSummary();
    }
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      {isAppConnected && (
        <>
          {' '}
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <EarningCard data={profitLossData?.Income} isLoading={isLoading} />
              </Grid>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <TotalOrderLineChartCard data={profitLossData?.NetProfitMargin} isLoading={isLoading} />
              </Grid>
              <Grid item lg={4} md={12} sm={12} xs={12}>
                <Grid container spacing={gridSpacing}>
                  <Grid item sm={6} xs={12} md={6} lg={12}>
                    <TotalIncomeDarkCard data={executiveSummary?.cashBalance} isLoading={summaryLoading} />
                  </Grid>
                  <Grid item sm={6} xs={12} md={6} lg={12}>
                    <TotalIncomeLightCard data={executiveSummary?.returnOnInvestment} isLoading={summaryLoading} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} md={8}>
                <TotalGrowthBarChart isLoading={isLoading} />
              </Grid>
              <Grid item xs={12} md={4}>
                <PopularCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Dashboard;

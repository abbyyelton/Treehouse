namespace TreehouseDefense
{
    class SniperTower : Tower
    {
        protected override double Accuracy { get; } = 0.75;
      
        public SniperTower(MapLocation location) : base(location)
        {
        }
    }
}
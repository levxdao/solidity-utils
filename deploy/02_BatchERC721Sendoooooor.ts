export default async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("BatchERC721Sendoooooor", {
    from: deployer,
    log: true,
  });
};
